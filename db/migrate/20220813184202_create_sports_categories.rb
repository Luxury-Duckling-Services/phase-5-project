class CreateSportsCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :sports_categories do |t|
      t.string :sport_name
      t.string :sport_image

      t.timestamps
    end
  end
end
