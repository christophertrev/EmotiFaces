// var Dispatcher = require('flux').Dispatcher;
var VideoHTML5 = require('./components/VideoHTML5');
var EmotionList = require('./components/emotionList');
var EmotionStore = require('./stores/EmotionsStore');
var EmotionImage = require('./components/image')
var webAPIUtils = require('./utils/webAPIUtils');



var getTodoState = function (){
  return {
    allEmotions: EmotionStore.getAll(),
    selectedID: EmotionStore.getSelectedID()
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

      // <VideoHTML5 src='video/video.mp4' /> 
      // Hello, <input type="text" placeholder="Your name here Please s" />!
      // It is {this.props.date.toTimeString()}
  render: function() {
    return (
      <div>
      <EmotionList selectedID={this.state.selectedID} allEmotions={this.state.allEmotions} />
      <EmotionImage selectedID={this.state.selectedID} allEmotions={this.state.allEmotions} />
      </div>
    );
  },

  _onChange: function (){
    this.setState(getTodoState());
  }
});

// setInterval(function() {
React.render(
  <EmotionApp date={new Date()} />,
  document.getElementById('example')
);
