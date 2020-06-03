import consumer from "./consumer"

consumer.subscriptions.create("InvitationChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // $('.no-news').css("display", "none");
    // $('#invitation-sand').append(`
    //   <a href="/playground/racing/rooms/` + data.room_id + `">
    //     <img src="/icon/swords.png" alt="">
    //     <p>Invitation Form ` + data.user_id + `</p>
    //   </a>
    // `);
    // $('.icon-for-new-post').css("display", "flex");
    // $('.nav-item-news').on("click", function(){
    //   $('.icon-for-new-post').css("display", "");
    // })
    console.log(data)
  }
});
$(function(){
  if ($('#racing-index').length > 0){
    $('.post-news').on('click', function(){
      let thisRoomId = this.id
      let thisRoomName = $(`#${thisRoomId}`).data('room-name')
      let thisRoomNum = $(`#${thisRoomId}`).data('room-id')
      
      $('#invitation_content')[0].value = thisRoomName
      $('#invitation_room_id')[0].value = thisRoomNum
      $('input#sand_news')[0].click();
    })
  }
})