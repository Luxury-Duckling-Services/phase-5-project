class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.text :post_subtitle
      t.integer :sports_category_id
      t.integer :drill_id
      t.integer :workout_program_id
      t.integer :workout_session_id

      t.timestamps
    end
  end
end
