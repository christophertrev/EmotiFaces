var React = require('react');
// var Dispatcher = require('flux').Dispatcher;
var VideoHTML5 = require('./components/VideoHTML5');
var EmotionList = require('./components/emotionList');
var EmotionStore = require('./stores/EmotionsStore');
var EmotionImage = require('./components/image')
var webAPIUtils = require('./utils/webAPIUtils');



var getTodoState = function (){
  return {
    allEmotions: EmotionStore.getAll(),
    selectedID: EmotionStore.getSelectedID(),
    imgSrc: EmotionStore.getImgSrc(),
    showImages : EmotionStore.showImages()
  }
}



var EmotionApp = React.createClass({
  getInitialState: function (){
    return getTodoState();
  },

  componentDidMount: function() {
    EmotionStore.addChangeListener(this._onChange);
    webAPIUtils.getAllEmotions();
  },

  componentWillUnmount: function() {
    EmotionStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
      <EmotionList selectedID={this.state.selectedID} allEmotions={this.state.allEmotions} />
      <EmotionImage showImages={this.state.showImages} showLoading={this.state.showLoading} imgSRC={this.state.imgSrc} />
      </div>
    );
  },

  _onChange: function (){
    this.setState(getTodoState());
  }
});

React.render(
  <EmotionApp date={new Date()} />,
  document.getElementById('example')
);
