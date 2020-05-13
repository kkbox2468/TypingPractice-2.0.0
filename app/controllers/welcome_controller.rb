class WelcomeController < ApplicationController
  def index
    @admin = Admin.new
    render layout:  pureBG
  end
end
