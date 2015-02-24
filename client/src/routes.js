var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var mainApp = require('./mainApp')
var Pic = require('./components/VideoHTML5')

var App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});



var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="takePic" path="/pic" handler={Pic}/>
    <DefaultRoute handler={mainApp}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('example'));
});