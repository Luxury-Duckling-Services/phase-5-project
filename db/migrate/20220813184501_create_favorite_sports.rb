class CreateFavoriteSports < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_sports do |t|
      t.integer :user_id
      t.integer :sports_category_id

      t.timestamps
    end
  end
end
