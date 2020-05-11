class CreateUserArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_articles do |t|
      t.float :time
      t.float :letter_count
      t.float :speed
      t.string :wrong_letter
      t.float :wrong_letter_count
      t.float :accuracy
      t.references :user, null: false, foreign_key: true
      t.references :article, null: false, foreign_key: true

      t.timestamps
    end
  end
end
