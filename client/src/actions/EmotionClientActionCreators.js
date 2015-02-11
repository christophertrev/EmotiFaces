var AppDispatcher = require('../dispatcher/AppDispatcher');
var webAPIUtils = require('../utils/webAPIUtils');
// var ChatConstants = require('../constants/ChatConstants');

// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  selectEmotion: function(id) {
    AppDispatcher.handleViewAction({
      type: 'SELECT_EMOTION',
      id: id
    });
  },
  hideLoading: function (){
    AppDispatcher.handleViewAction({
      type: 'HIDE_LOADING'
    });
  },
  refreshImage: function (){
    AppDispatcher.handleViewAction({
      type: 'REFRESH_IMAGE'
    });
  }
};