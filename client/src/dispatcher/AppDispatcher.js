var assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher, {
  

  handleServerAction: function(action) {
    console.log('in handleServerAction', action)
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  },
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;