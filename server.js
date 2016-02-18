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
    
    knex('article').select('*')
    .then(function (articles) {
        res.end(ReactDOMServer.renderToString(React.createElement(Index, { articles: articles.slice(0, 3) })));
    });
}

function updateArticles(req, res) {
    
    var newsServer = 'http://www.klix.ba';
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    got(newsServer)
    .then(function (response) {
        
        var articles = [];
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
            res.end("Done");
        });
    })
    .catch(function (error) { console.log(error) });   
}

server.listen(port);

console.log('Listening on http://localhost:' + port);