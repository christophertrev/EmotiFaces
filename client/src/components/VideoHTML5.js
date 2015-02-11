var React = require('react');
var ReactPropTypes = React.PropTypes;

// var ENTER_KEY_CODE = 13;

var videoHTML5 = React.createClass({

  // propTypes: {
  //   className: ReactPropTypes.string,
  //   id: ReactPropTypes.string,
  //   placeholder: ReactPropTypes.string,
  //   onSave: ReactPropTypes.func.isRequired,
  //   value: ReactPropTypes.string
  // },

  // getInitialState: function() {
  //   if(!this.props.src){
  //     console.log("no Video Source givin :(");
  //     console.log(this.props.src || 'video/video.mp4')
  //   }
  //   return {
  //     src: this.props.value || 'video/video.mp4'
  //   };
  // },

  /**
   * @return {object}
   */
  render: function() {
    // console.log(this.props)
    // var videoLoc = 'video/video.mp4'
    // var video = document.querySelector('video');

    // navigator.webkitGetUserMedia({audio: true, video: true}, function(stream) {
    //   video.src = window.URL.createObjectURL(stream);
    // }, function(){});
    return (
      
      <video checked={true} src={this.props.src} controls/>

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