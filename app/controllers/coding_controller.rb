class CodingController < ApplicationController
  def index
    render :file => "#{Rails.root}/public/404.html",  layout: false, status: :not_found
  end
end