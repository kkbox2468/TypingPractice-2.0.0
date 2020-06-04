import consumer from "./consumer"

consumer.subscriptions.create("CreateRoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#new-create').prepend(`
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
        <div class="card-body ">
          <div class="request-title d-flex justify-content-between">
              <p>Owner:`+ data.owner_name +`</p>
          </div>
          <h5>`+ data.name +`</h5>
          <p>`+ data.description +`</p>
          <p>Player：0persons</p>
          <div class="link-group d-flex">
            <a href="/playground/racing/rooms/`+ data.id +`" class="btn">Join</a>
          </div>
        </div>
      </div>
    `);
  }
});
