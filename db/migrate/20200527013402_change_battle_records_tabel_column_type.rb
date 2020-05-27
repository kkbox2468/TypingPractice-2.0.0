class ChangeBattleRecordsTabelColumnType < ActiveRecord::Migration[6.0]
  def change

    change_column :battle_records, :time, :integer
    change_column :battle_records, :letter_count, :integer
    change_column :battle_records, :wrong_letter_count, :integer
    
    add_column :battle_records, :topic_id, :integer
    
  end
end
