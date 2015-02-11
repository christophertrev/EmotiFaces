var React = require('react');
var EmotionItem = require('./emotionItem');


var EmotionList = React.createClass({


  render: function (){
    var emotions = [];
    var allEmotions = this.props.allEmotions;
    for (var key in allEmotions) {
      emotions.push(<EmotionItem {...this.props} key= {key}  emotion= {allEmotions[key]}/>);
    }
    return (
      <ul className={"emotionList"}>{emotions}</ul>
    )
  },
})


module.exports = EmotionList;