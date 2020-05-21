class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.text :content
      t.string :type

      t.timestamps
    end
  end
end
