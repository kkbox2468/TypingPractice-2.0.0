class AddHeartCounterToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :heart_counter, :integer
  end
end
