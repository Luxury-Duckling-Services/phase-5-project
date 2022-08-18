class CreateDrills < ActiveRecord::Migration[6.1]
  def change
    create_table :drills do |t|
      t.integer :user_id
      t.string :drill_title
      t.text :instruction
      t.integer :sports_category_id

      t.timestamps
    end
  end
end
