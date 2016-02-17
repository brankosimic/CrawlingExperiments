var React = require('react');

var Articles = React.createClass({
    propTypes: {
        articles: React.PropTypes.array
    },
    getInitialState: function() {
        return {
            articles: (this.props.articles || [])
        };
    },
    onArticle: function(article) {
        this.state.articles.push(article);

        this.setState({
            articles: this.state.articles
        });
    },
    render: function() {
        var articles = this.state.articles.map(function(article) {
            return <Article article={article} ></Article>;
        });

        return (
          <div>
            {articles}
        </div>
    );
}
});

var Article = React.createClass({
    propTypes: {
        article: React.PropTypes.object
    },
    getInitialState: function() {
        return {
            article: this.props.article
        };
    },
    render: function() {
        return (
            <article className="kartica velika">
                <a href={this.props.article.link}>
                    <div className="above">
                        <span className="kategorija tc_vijesti">{this.props.article.category}<i className="mark icon_foto"></i></span>
                        <span className="shareovi"><i className="icon_dijeljenja"></i> 7</span>
                    </div>
                    <div className="img">
                        <img src={this.props.article.image} /><div className="overblack"></div></div>
                    <h1 className="srednji">{this.props.article.title}</h1>
                    <div className="uvod">{this.props.article.summary}</div>
                    <div className="below l0">
                        <span className="hidden-md hidden-sm date">prije {this.props.article.time} min</span>
                        <span className="visible-md-inline-block visible-sm-inline-block date">prije {this.props.article.time}</span>
                        <span className="comments"><i className="icon_komentari"></i> {this.props.article.commentsCount}</span>
                    </div>
                    <div className="clearfix"></div>
                </a>
            </article>
    );
}
});

module.exports = Articles;