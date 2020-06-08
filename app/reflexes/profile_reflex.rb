class ProfileReflex < ApplicationReflex
  include CableReady::Broadcaster

  def likes
    @user = User.find(element.dataset[:id])
    @arti_accuracy = @user.user_topics.average(:accuracy).to_i 

    # byebug
    @user.increment! :heart_counter
    cable_ready["heart_count"].text_content(
      selector: "#user-#{@user.id}-likes",
      text: @user.heart_counter
    )
    cable_ready.broadcast
  end
end
