class CreateWorkoutPrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_programs do |t|

      t.timestamps
    end
  end
end
