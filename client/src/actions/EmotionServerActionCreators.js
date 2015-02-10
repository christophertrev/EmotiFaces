var AppDispatcher = require('../dispatcher/AppDispatcher');
var webAPIUtils = require('../utils/webAPIUtils');
// var ChatConstants = require('../constants/ChatConstants');

// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
    // var rawMessages = ['sad','happy'];
    console.log('in receiveAll', rawMessages)
    AppDispatcher.handleServerAction({
      type: 'RECEIVE_MESSAGES',
      rawMessages: rawMessages
    });
  },

  // getEmotions: function (){
  //   webAPIUtils.getAllEmotions()
  // }
  // receiveCreatedMessage: function(createdMessage) {
  //   AppDispatcher.handleServerAction({
  //     type: 'RECEIVE_RAW_CREATED_MESSAGE',
  //     rawMessage: createdMessage
  //   });
  // }

};