class DeleteAdminsIndexAdminsOnResetPasswordTokenColumn < ActiveRecord::Migration[6.0]
  def change
    remove_index :admins, :reset_password_token
  end
end
