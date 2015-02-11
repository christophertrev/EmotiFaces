var React = require('react');
var EmotionClientActionCreators = require('../actions/EmotionClientActionCreators');
var cx = require('react/lib/cx');


var EmotionItem = React.createClass({

  render: function (){
    // console.log('in emtotionItme',this.props)
    return (
      <li
      className = {cx({
        'active': this.props.emotion.id === this.props.selectedID,
        'emotionItem': true
      })} 
      onClick={this._onClick}>
        {this.props.emotion.emotion}
      </li>
    )
  },

  _onClick: function (){
    EmotionClientActionCreators.selectEmotion(this.props.emotion.id)
  }

})


module.exports = EmotionItem;