var React = require('react');
var cx = require('react/lib/cx');
var EmotionClientActionCreators = require('../actions/EmotionClientActionCreators');



var EmotionList = React.createClass({
// "https://avatars3.githubusercontent.com/u/6379188?v=3&s=460"

  render: function(){
    var showLoading = this.props.showImages.showLoading;
    var showEmotion = this.props.showImages.showEmotion
    return (
      <div
      className = {cx({
        'picture': true
      }) }      
      >
      {showLoading ? 
      <img 
        className= {cx({
          'loadingImg': true
        })} 
        src='img/loading.gif' />
        : null}
      { true ?
      <img
      className = {cx({
        'emotionImg': true
      }) }
      src={this.props.imgSRC}
      onLoad={this._onLoad}
      onClick={this._onClick} />
        : null}
      </div>
    )
  },

  _onLoad : function (){
    EmotionClientActionCreators.hideLoading();
  },

  _onClick: function (){
    EmotionClientActionCreators.refreshImage();
  }



});

module.exports = EmotionList;
