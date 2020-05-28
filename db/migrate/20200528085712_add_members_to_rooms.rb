class AddMembersToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :members, :integer, default: 0
  end
end
