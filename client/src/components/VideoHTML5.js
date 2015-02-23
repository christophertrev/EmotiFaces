var React = require('react');
var ReactPropTypes = React.PropTypes;
var VideoStore = require('../stores/VideoStore');
var cx = require('react/lib/cx');

// var ENTER_KEY_CODE = 13;

var getVidSrc = function (){
  return {
    src: VideoStore.getSrc()
  };
}

navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;
    
var errorCallback = function(){}



var videoHTML5 = React.createClass({

  componentDidMount: function() {
    // EmotionStore.addChangeListener(this._onChange);
    // webAPIUtils.getAllEmotions();
    var that = this; 
    if (navigator.getUserMedia) {
      console.log('runt?')
      navigator.getUserMedia({ video: true}, function(stream) {
        console.log('setting streem')
        // that.forceUpdate();
        // this.render():
        that.setState({
          src: window.URL.createObjectURL(stream)
        })
        return obj.src = window.URL.createObjectURL(stream);
      }, errorCallback);
    }
     // else {
    //  console.log('gettings trem')
    //   src = 'somevideo.webm'; // fallback.
    // }
  },


  componentWillUnmount: function() {
    // EmotionStore.removeChangeListener(this._onChange);
  },


  getInitialState: function() {
    // if(!this.props.src){
    //   console.log("no Video Source givin :(");
    //   console.log(this.props.src || 'video/video.mp4')
    // }
    // return {
    //   src: this.props.value || 'video/video.mp4'
    // };

    // navigator.getUserMedia  = navigator.getUserMedia ||
    //                           navigator.webkitGetUserMedia ||
    //                           navigator.mozGetUserMedia ||
    //                           navigator.msGetUserMedia;

    // var src; 
    // var obj = {};
    // var errorCallback = function(){}
    // var that = this;
    // if (navigator.getUserMedia) {
    //   console.log('runt?')
    //   navigator.getUserMedia({audio: true, video: true}, function(stream) {
    //     console.log('setting streem')
    //   // that.forceUpdate();
    //   // this.render():
    //     return obj.src = window.URL.createObjectURL(stream);
    //   }, errorCallback);
    // } else {
    //   console.log('gettings trem')
    //   src = 'somevideo.webm'; // fallback.
    // }
    // return obj;
    return getVidSrc();
  },

  /**
   * @return {object}
   */
  render: function() {

    console.log('src',this.state.src)
    return (
      
      <video className = {cx({
        'videoFeed': true
      })}
      src={this.state.src} autoPlay/>

    );
  },

  // /*
  //  * Invokes the callback passed in as onSave, allowing this component to be
  //  * used in different ways.
  //  */
  // _save: function() {
  //   this.props.onSave(this.state.value);
  //   this.setState({
  //     value: ''
  //   });
  // },

  // /**
  //  * @param {object} event
  //  */
  // _onChange: function(/*object*/ event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  // },

  // /**
  //  * @param  {object} event
  //  */
  // _onKeyDown: function(event) {
  //   if (event.keyCode === ENTER_KEY_CODE) {
  //     this._save();
  //   }
  // }

});

module.exports = videoHTML5;