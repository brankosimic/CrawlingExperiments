var http = require('http');
var restify = require('restify');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var jsx = require('node-jsx');
const got = require('got');
var cheerio = require('cheerio');
var port = process.env.port || 1337;
var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'postgres',
        password : 'branko',
        database : 'Klix'
    }
});

jsx.install();
var Index = require('./Views/index.jsx');

var server = restify.createServer();

server.get({ path : '/updatearticles/' } , updateArticles);
server.get(/\/mainstyle\//, restify.serveStatic({
    directory: './styles',
    file: 'main.css'
}));
server.get({ path : '/' } , getArticles);


function getArticles(req, res , next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    knex('article')
    .join('subcategory', 'article.subCategoryName', '=', 'subcategory.name')
    .join('category', 'subcategory.categoryName', '=', 'category.name')
    .select('article.*', 'subcategory.*', 'category.*')
    .then(function (articles) {
        var grouped = [];
        for (var i = 0; i < articles.length; i++) {
            if (!grouped.some(function (item) { return item.categoryName == (articles[i].isPopular ? "Popular" : articles[i].categoryName); })) {
                var toInsert = {
                    categoryName: (articles[i].isPopular ? "Popular" : articles[i].categoryName), categoryId: articles[i].siteIdentifer, 
                    subCategories: [ articles[i].subCategoryName], categoryColor: articles[i].color, rows: [{ articles: [articles[i]] }]
                };
                if (articles[i].isPopular)
                    grouped.unshift(toInsert);
                else
                    grouped.push(toInsert);
            }
            else {
                var index = grouped.findIndex(function (item) {
                    return item.categoryName == (articles[i].isPopular ? "Popular" : articles[i].categoryName);
                });
                var big = articles[i].isBig || grouped[index].rows[0].articles.some(function (article) { return article.isBig; }) ? 0 : 1;
               
                if (grouped[index].rows[0].articles.length > (2 + big)) {
                    if (grouped[index].rows[0].articles.length == (3 + big) && grouped[index].rows.length == 1) {
                        grouped[index].rows.push({ articles: [] });
                    }
                    grouped[index].rows[1].articles.push(articles[i]);
                }
                else {
                    grouped[index].rows[0].articles.push(articles[i]);
                }

                if (articles[i].subCategoryName != "None" && grouped[index].subCategories.indexOf(articles[i].subCategoryName) == -1)
                    grouped[index].subCategories.push(articles[i].subCategoryName);
            }
        }

        return grouped;
    })
    .then(function (grouped) {
        res.end(ReactDOMServer.renderToString(React.createElement(Index, { articles: grouped })));
    });
}

function updateArticles(req, res) {
    
    var newsServer = 'http://www.klix.ba';   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    got(newsServer)
    .then(function (response) {
        
        var articles = [];
        var subCategories = [{ name: "None", categoryName: "Popular" }];
        var categories = [{ name: 'Popular', siteIdentifer: "", color: "" }];
        $ = cheerio.load(response.body, { decodeEntities: false });
        
        $("article").each(function () {
            if ($(this).closest(".nightlifeBlock").length == 0) {

                var $block = $(this).closest(".block-dyn");
                var $blockHeading = $block.find(".block-head .headingUrl");
                if ($block.length > 0 && $blockHeading.length > 0 && !categories.some(function (category) { return category.name.indexOf($blockHeading.text()) > -1 })) {
                    categories.push({
                        name: $blockHeading.text(),
                        siteIdentifer: $blockHeading.attr("class").split(" ")[1].replace("tch_", ""),
                        color: $block.find(".kocka").css('background-color')
                    });
                }
                
                var subCategory = $(this).find("span.kategorija").contents(":not(i)").text() || "None";
                if (!subCategories.some(function (category) { return category.name.indexOf(subCategory) > -1 })) {
                    subCategories.push({
                        name: subCategory,
                        categoryName: $blockHeading.text() || $(this).find(".kategorija").attr("class").split(" ")[1].replace("tc_", "").capitalize()
                    });
                }
                
                articles.push({
                    title: $(this).find("h1").html(),
                    link: newsServer + $(this).find("a").attr("href"),
                    image: $(this).find("img").attr("src"),
                    summary: $(this).find(".uvod").html(),
                    time: $(this).find(".date").first().contents(":not(i)").text().replace("prije ", ""),
                    commentsCount: $(this).find(".comments").contents(":not(i)").text(),
                    isPopular: $(this).closest(".block.first.struct").length == 1,
                    isBig: $(this).find("h1").is(".veliki"),
                    isFlagged: $(this).is(".obojena"),
                    subCategoryName: subCategory
                });
            }
        });
        
        console.log(articles);

        knex("article").del()
        .then(function () {
            return knex("subcategory").del()
        })
        .then(function () {
            return knex("category").del()
        })
        .then(function () {
            return knex('category').insert(categories);
        })
        .then(function () {
            return knex('subcategory').insert(subCategories);
        })
        .then(function () {
            return knex('article').insert(articles);
        })
        .then(function () { 
            res.end("Done");
        });
    })
    .catch(function (error) { console.log(error) });   
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

server.listen(port);

console.log('Listening on http://localhost:' + port);