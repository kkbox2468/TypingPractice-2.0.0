module Accessible
  extend ActiveSupport::Concern
  included do
    #當module Accessible被include會執行此block
    before_action :check_user
  end

  private
  def check_user
    if current_admin
      flash.clear
      # if you have rails_admin. You can redirect anywhere really
      redirect_to(rails_admin.dashboard_path) and return
    elsif current_user
      flash.clear
      # The authenticated root path can be defined in your routes.rb in: devise_scope :user do...
      # redirect_to(authenticated_user_root_path) and return
      # redirect_to root_path
    else
      redirect_to new_user_session_path, notice: 'Not a member? Join us !'
      
    end
  end
end