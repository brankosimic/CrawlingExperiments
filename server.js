var http = require('http');
var React = require('react');
var jsx = require('node-jsx');  

var port = process.env.port || 1337;

jsx.install();
var Books = require('./Views/index.jsx');

http.createServer(function (req, res) {
    
    var books = [{
            title: 'Professional Node.js',
            read: false
        }, {
            title: 'Node.js Patterns',
            read: false
        }];

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(React.renderToStaticMarkup(
        React.DOM.body(
            null,
      React.DOM.div({
                id: 'container',
                dangerouslySetInnerHTML: {
                    __html: React.renderToString(React.createElement(Books, {
                        books: books
                    }))
                }
            }),
      React.DOM.script({
                'id': 'initial-data',
                'type': 'text/plain',
                'data-json': JSON.stringify(books)
            })
        )
    ));
}).listen(port);

console.log('Listening on http://localhost:' + port);