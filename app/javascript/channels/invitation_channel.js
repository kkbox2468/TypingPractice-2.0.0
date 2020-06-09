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
    $('.no-prompt').css("display", "none");
    $('#invitation-sand').append(`
      <a href="/playground/racing/rooms/` + data.room_id + `">
        <img src="/icon/swords.png" alt="">
        <p>Invitation From ` + data.owner_name + `</p>
      </a>
    `);
    $('.icon-for-new-post').css("display", "flex");
    $('.nav-item-prompt').on("click", function(){
      $('.icon-for-new-post').css("display", "");
    })
  }
});
$(function(){
  if ($('#racing-index').length > 0){
    $('.post-news').on('click', function(){
      let thisRoomId = this.id
      let thisRoomName = $(`#${thisRoomId}`).data('room-name')
      let thisRoomNum = $(`#${thisRoomId}`).data('room-id')
      let thisOwner = $(`#${thisRoomId}`).data('owner-name')
      
      $('#invitation_content')[0].value = thisRoomName
      $('#invitation_room_id')[0].value = thisRoomNum
      $('#invitation_owner_name')[0].value = thisOwner
      $('input#sand_news')[0].click();
    })
  }
})