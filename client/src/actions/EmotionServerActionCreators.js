var AppDispatcher = require('../dispatcher/AppDispatcher');
var webAPIUtils = require('../utils/webAPIUtils');
// var ChatConstants = require('../constants/ChatConstants');

// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
    AppDispatcher.handleServerAction({
      type: 'RECEIVE_MESSAGES',
      rawMessages: rawMessages
    });
  },
};