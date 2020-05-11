class CreateRubies < ActiveRecord::Migration[6.0]
  def change
    create_table :rubies do |t|
      t.text :content

      t.timestamps
    end
  end
end
