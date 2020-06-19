# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  
  # session = nil
  # include Accessible
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  def new
    
    super
  
  #   # @user = User.new
  #   # user = User.find(current_user.id)
  #   # user.remote_photo_url = session["devise.facebook_data"].info.image
  #   # user.save
  end

  # POST /resource
  def create
    
    super #此處會先呼叫self.new_with_session(params, session)之後，取得new_with_session(params, session)回傳的User物件，再儲存該User物件
    
    
    # user = User.new( params.require(:user).permit(:email,:password, :nickname))
    # user.remote_photo_url = session["devise.facebook_data"]["info"]["image"]
    # user.provider = session["devise.facebook_data"]["provider"]
    # user.uid = session["devise.facebook_data"]["uid"]
    # user.save
    
  end

  # GET /resource/edit
  # def edit
  #   super
  
  # end

  # PUT /resource
  def update
    super

    user = User.find(current_user.id)
    user.update(params.require(:user).permit(:photo))
  end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
