class ProfilesController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    @arti_accuracy = @user.user_topics.average(:accuracy).to_i 
    @arti_wpm = @user.user_topics.average(:speed).to_f
    @heart_counter = @user.heart_counter
  end
  
end