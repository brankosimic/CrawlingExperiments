var http = require('http');
var React = require('react');
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
var Articles = require('./Views/index.jsx');

http.createServer(function (req, res) {
    
    var newsServer = 'http://www.klix.ba';
    var articles = [];

    got(newsServer)
    .then(function (response) {
        $ = cheerio.load(response.body);

        $(".block.first.struct article").each(function () {
            articles.push({
                title: $(this).find("h1").html(),
                link: newsServer + $(this).find("a").attr("href"),
                category: $(this).find("span.kategorija").contents(":not(i)").text(),
                image: $(this).find("img").attr("src"),
                summary: $(this).find(".uvod").html(),
                time: $(this).find(".date").first().contents(":not(i)").text().replace("prije ", ""),
                commentsCount: $(this).find(".comments").contents(":not(i)").text(),
                isPopular: true,
                isBig: $(this).find("h1").is(".veliki")
            });
        });

        knex("article").del()
        .then(function () {
            return knex('article').insert(articles);
        })
        .then(function () {
            return knex('article').select('*');
        })
        .then(function (projectNames) {
            console.log(projectNames);
        });
    })
    .catch(function(error) { console.log(error) });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(React.renderToStaticMarkup(
        React.DOM.body(
            null,
      React.DOM.div({
                id: 'container',
                dangerouslySetInnerHTML: {
                    __html: React.renderToString(React.createElement(Articles, {
                        articles: articles
                    }))
                }
            }),
      React.DOM.script({
                'id': 'initial-data',
                'type': 'text/plain',
                'data-json': JSON.stringify(Articles)
            })
        )
    ));
}).listen(port);

console.log('Listening on http://localhost:' + port);