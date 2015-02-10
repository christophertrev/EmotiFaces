var cx = require('react/lib/cx');


var EmotionList = React.createClass({
// "https://avatars3.githubusercontent.com/u/6379188?v=3&s=460"

  render: function(){
    console.log('in image rendering', this.props)
    var imageSRC = 'http://emotifaces.herokuapp.com/emotion/'
    if(this.props.selectedID){
      imageSRC += this.props.allEmotions[this.props.selectedID].emotion
    }
    console.log(imageSRC)
    return (
      <img
      className = {cx({
        'emotionImg': true
      }) }
      src= {imageSRC}/>
    )
  }



});

module.exports = EmotionList;
