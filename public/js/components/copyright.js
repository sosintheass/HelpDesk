/*** @jsx React.DOM */

const React = require('react');

const Copyright = React.createClass({
    render() {
        return (
            <div className="sibirix">
                <a target="_blank" href="">
                    <span className="slon" />
                </a>
                <span className="text"> — разработка сайта</span>
            </div>
        )
    }
});

module.exports = Copyright;
