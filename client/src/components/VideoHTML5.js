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
          src: window.URL.createObjectURL(stream),
          allowUse: true,
          localMediaStream : stream
        })
        // return obj.src = window.URL.createObjectURL(stream);
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

    return getVidSrc();
  },

  /**
   * @return {object}
   */
  render: function() {

    console.log('src',this.state.src)
    return (

      <div className= {cx({'videoContainer':true})}> 
        
        { this.state.allowUse ?
        <button onClick={this._onClick} className={cx({'captureBtn':true})}/> : null
        }
        <video className = {cx({
          'videoFeed': true
        })}
        src={this.state.src} onLoad={this._onLoad} autoPlay/>
        { this.state.hasPic ? 
          <img src={this.state.imgSrc}/>
          : null
        }
      </div>

    );
  },

  _onLoad: function (){
    console.log('aoiamsd')
  },
  _onClick: function(){
    console.log('clicekd')
    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    // var localMediaStream = null;

    // function snapshot() {
      if (this.state.localMediaStream) {
        ctx.drawImage(video, 0, 0);
        // "image/webp" works in Chrome.
        // Other browsers will fall back to image/png.
        console.log("doing stufff")
        this.setState({
          imgSrc : canvas.toDataURL('image/webp'),
          hasPic : true
        })
      }
    // }
  }

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