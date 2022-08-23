class CreateDrillSessionJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :drill_session_joins do |t|
      t.integer :drill_id
      t.integer :workout_session_id
      t.integer :rep
      t.integer :set
      t.integer :rest_time
      t.integer :index

      t.timestamps
    end
  end
end
