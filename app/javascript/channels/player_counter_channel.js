import consumer from "./consumer"

consumer.subscriptions.create("PlayerCounterChannel", {

  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if ($('#racing-index').length > 0){

      $(function(){
        let roomId = data.room_id
        console.log(roomId)
        $(`.room${roomId}-counter`)[0].innerText = data.room_members
      })
    }
  }
});