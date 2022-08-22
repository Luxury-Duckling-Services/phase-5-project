class CreateWorkoutSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_sessions do |t|
      t.integer :user_id
      t.string :workout_session_title
      t.text :description
      t.integer :sports_category_id

      t.timestamps
    end
  end
end
