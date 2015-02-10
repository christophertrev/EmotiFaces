var EmotionServerActionCreators = require('../actions/EmotionServerActionCreators');

module.exports = {
  getAllEmotions: function (){
    console.log('getting all emotions')
    $.ajax({
      url: "http://emotifaces.herokuapp.com/emotion/"
      // url: "http://localhost:3000/emotion"
    })
      .done(function( emotions ) {
        // if ( console && console.log ) {
          // console.log(Array.isArray(data))
          // console.log( "Sample of data:", data.slice( 0, 100 ) );
          // var emotions = data;
          EmotionServerActionCreators.receiveAll(emotions);
        // }
      });


  }
}
