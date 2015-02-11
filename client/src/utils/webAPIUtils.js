var EmotionServerActionCreators = require('../actions/EmotionServerActionCreators');

module.exports = {
  getAllEmotions: function (){
    $.ajax({
      url: "https://emotifaces.herokuapp.com/emotion/"
    })
      .done(function( emotions ) {
          EmotionServerActionCreators.receiveAll(emotions);
      });


  }
}
