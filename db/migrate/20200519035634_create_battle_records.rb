class CreateBattleRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :battle_records do |t|
      t.float :time
      t.float :letter_count
      t.float :speed
      t.string :wrong_letter
      t.float :wrong_letter_count
      t.float :accuracy
      t.integer :user_a_id
      t.integer :user_b_id
      t.integer :article_id
      t.integer :ruby_id

      t.timestamps
    end
  end
end
