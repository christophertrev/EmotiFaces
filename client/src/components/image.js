var React = require('react');
var cx = require('react/lib/cx');
var EmotionClientActionCreators = require('../actions/EmotionClientActionCreators');



var EmotionList = React.createClass({
// "https://avatars3.githubusercontent.com/u/6379188?v=3&s=460"

  render: function(){
    console.log('in image rendering', this.props.showImages)
    // var imageSRC = 'http://emotifaces.herokuapp.com/emotion/'
    // if(this.props.selectedID){
    //   imageSRC += this.props.allEmotions[this.props.selectedID].emotion
    // } else {
    //   imageSRC = '../img/loading.gif'
    // }
    //console.log(this.props.im)
    // console.log(imageSRC)
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
    console.log('changedddd')
    EmotionClientActionCreators.hideLoading();
    //Hide loading image
  },

  _onClick: function (){
    // EmotionClientActionCreators.selectEmotion(this.props.emotion.id)
    EmotionClientActionCreators.refreshImage();
  }



});

module.exports = EmotionList;
