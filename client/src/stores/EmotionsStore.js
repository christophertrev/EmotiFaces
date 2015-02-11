var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');



var CHANGE_EVENT = 'change';
var _emotions = {};
var _selectedID = null;
var _showLoading = false;
var _showEmotion = true;
var _showImages = {
  showLoading: false,
  showEmotion: true
}
var _imgURL = null;

var EmotionsStore = assign({}, EventEmitter.prototype, {
  
  getAll: function() {
    return _emotions;
  },

  getSelectedID: function (){
    return _selectedID;
  },

  showLoading : function (){
    return _showLoading;
  },

  showImages: function (){
    return _showImages
  },

  getImgSrc: function (){
    console.log('getImgSrc')
    url = 'http://emotifaces.herokuapp.com/emotion/';
    if (_emotions[_selectedID]){
      // console.log(_emotions[_selectedID], 'emotions')
      url += _emotions[_selectedID].emotion;
      // url += '?timestamp=' + new Date().getTime();
    } else {
      //put default image here
      url = 'img/loading.gif'
      url= null
    }
    return _imgURL;
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
      _showImages.showLoading = true;
      _showImages.showEmotion = false;
      _selectedID = action.id

      console.log('getImgSrc')
      url = 'http://emotifaces.herokuapp.com/emotion/';
      if (_emotions[_selectedID]){
        // console.log(_emotions[_selectedID], 'emotions')
        url += _emotions[_selectedID].emotion;
        url += '?timestamp=' + new Date().getTime();
      } else {
        //put default image here
        url = 'img/loading.gif'
        url= null
      }
      _imgURL = url;
      EmotionsStore.emitChange();
      break
    case 'HIDE_LOADING':
      console.log('hidding loading thing')
      _showImages.showEmotion = true;
      _showImages.showLoading = false;
      EmotionsStore.emitChange();

      break
    case 'REFRESH_IMAGE': 
      _showImages.showLoading = true;
      _showImages.showEmotion = false;
      console.log('REFRESH_IMAGE action!')
      url = 'http://emotifaces.herokuapp.com/emotion/';
      if (_emotions[_selectedID]){
        // console.log(_emotions[_selectedID], 'emotions')
        url += _emotions[_selectedID].emotion;
        url += '?timestamp=' + new Date().getTime();
      } else {
        //put default image here
        url = 'img/loading.gif'
        url= null
      }
      _imgURL = url;
      EmotionsStore.emitChange();

      break

  }
  

})

// webAPIUtils.getAllEmotions();

module.exports = EmotionsStore;
