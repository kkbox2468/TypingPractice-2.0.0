class WelcomeController < ApplicationController
  def index
    @admin = Admin.new
  end
end
