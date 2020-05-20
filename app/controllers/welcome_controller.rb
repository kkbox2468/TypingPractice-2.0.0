class WelcomeController < ApplicationController
  def index
    @admin = Admin.new
    render layout: 'no_container_navbar' #局部渲染一個沒有特製的頁面（要先在layout做一個頁面）

  end
  
end

