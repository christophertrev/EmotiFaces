var React = require('react');
var EmotionClientActionCreators = require('../actions/EmotionClientActionCreators');
var cx = require('react/lib/cx');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;



var EmotionItem = React.createClass({

  render: function (){
    return (
      <li
      className = {cx({
        'active': this.props.emotion.id === this.props.selectedID,
        'emotionItem': true
      })} 
      onClick={this._onClick}>
        <RaisedButton className = {cx({
          'active': this.props.emotion.id === this.props.selectedID,
          'emotionItem': true
        })}
         label= {this.props.emotion.emotion} primary={true} />
      </li>
    )
  },

  _onClick: function (){
    EmotionClientActionCreators.selectEmotion(this.props.emotion.id)
  }

})


module.exports = EmotionItem;