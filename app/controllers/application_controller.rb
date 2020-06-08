class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from ActiveRecord::RecordNotFound, with: :page_not_found
  

  private

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
      devise_parameter_sanitizer.permit(:account_update, keys: [:nickname])
    end

    def page_not_found
      render file: 'public/404.html', 
      status: 404, 
      layout: false
    end

    def is_current_user?
      if not current_user
        redirect_to new_user_session_path
      end
    end
end


private 

# def topic_time
#   topic_time  = Time.zone.now.beginning_of_day..Time.zone.now.end_of_day
# end