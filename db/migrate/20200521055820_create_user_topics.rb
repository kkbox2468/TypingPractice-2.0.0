class CreateUserTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :user_topics do |t|
      t.integer :time
      t.integer :letter_count
      t.float :speed
      t.string :wrong_letter
      t.integer :wrong_letter_count
      t.float :accuracy
      t.integer :user_id
      t.integer :topic_id

      t.timestamps
    end
  end
end
