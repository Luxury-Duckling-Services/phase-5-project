class CreateWorkoutSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_sessions do |t|

      t.timestamps
    end
  end
end
