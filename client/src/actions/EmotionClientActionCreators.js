var AppDispatcher = require('../dispatcher/AppDispatcher');
var webAPIUtils = require('../utils/webAPIUtils');
// var ChatConstants = require('../constants/ChatConstants');

// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  selectEmotion: function(id) {
    // var rawMessages = ['sad','happy'];
    console.log('in selectEmotion with id= ',id)
    AppDispatcher.handleViewAction({
      type: 'SELECT_EMOTION',
      id: id
    });
  },
  hideLoading: function (){
    console.log('in hideLoading')
    AppDispatcher.handleViewAction({
      type: 'HIDE_LOADING'
    });
  }
};