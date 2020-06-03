import consumer from "./consumer"

consumer.subscriptions.create("PlayerCounterChannel", {

  connected() {
    // Called when the subscription is ready for use on the server
    // console.log('ready')

  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
$(function(){
  if ($('#racing-index').length > 0){
    // $('.player-counter').on("click", function(event){
    //   // event.preventDefault();
    //   let roomId = this.id
    //   let roomCounter = $(`#${roomId}`).data('counter')
    //   console.log(this.id)
    //   console.log(roomCounter)
    //   // console.log(targetRoom)
    //   // let playerCounter = $(``)
    //   if (roomCounter < 2){
    //     // Number($(`.room${roomId}-counter`)[0].innerText) + 1
    //     $(`.room${roomId}-counter`)[0].innerText = roomCounter
    //   }
    //   else{
    //     console.log('full')
    //   }
    // })
  }
})