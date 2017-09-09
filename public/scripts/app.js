"use strict";

console.log("app.js running!");

// JSX - JavaScript XML
var template = React.createElement(
  "p",
  null,
  "Does this change?"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
