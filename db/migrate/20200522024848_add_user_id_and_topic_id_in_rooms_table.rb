class AddUserIdAndTopicIdInRoomsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :user_id, :integer
    add_column :rooms, :topic_id, :integer
  end
end
