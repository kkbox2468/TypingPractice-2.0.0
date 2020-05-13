class WelcomeController < ApplicationController
  def index
    @admin = Admin.new
      render layout:  'pureBG'  #無container跟navbar的bg
  end
end
