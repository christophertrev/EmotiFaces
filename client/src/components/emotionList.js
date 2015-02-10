var EmotionItem = require('./emotionItem');


var EmotionList = React.createClass({


  render: function (){
    var emotions = [];
    // var allTodos = {'1':{text: 'This is Item 1'}, '2':{text:'This is item 2'}}
    var allEmotions = this.props.allEmotions;
    // console.log(this.props)
    // var { allEmotions, ...other } = this.props;
    for (var key in allEmotions) {
      // emotions.push(<TodoItem key={key} todo={allemotions[key]} />);
      emotions.push(<EmotionItem {...this.props} key= {key}  emotion= {allEmotions[key]}/>);
    }
    return (
      <ul className={"emotionList"}>{emotions}</ul>
    )
  },

})


module.exports = EmotionList;