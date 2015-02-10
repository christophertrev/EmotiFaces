var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');



var CHANGE_EVENT = 'change';
var _emotions = {};
var _selectedID = null;

var EmotionsStore = assign({}, EventEmitter.prototype, {
  
  getAll: function() {
    return _emotions;
  },

  getSelectedID: function (){
    return _selectedID;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

EmotionsStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;
  console.log(action)
  switch(action.type){

    case 'RECEIVE_MESSAGES':
      // console.log('am in recived RECEIVE_MESSAGES')
      // console.log(action.rawMessages)
      for ( var i  in action.rawMessages){
        _emotions[i] = {
          id: i,
          emotion: action.rawMessages[i]
        }
      }
      // console.log(this)
      EmotionsStore.emitChange();
      break;
    case 'SELECT_EMOTION':
      // this._selectedID = _emotions[action.id].selected;
      // this._selectedID = action.id
      // console.log('action???', action.id)
      _selectedID = action.id
      EmotionsStore.emitChange();
      break
  }
  

})

// webAPIUtils.getAllEmotions();

module.exports = EmotionsStore;
