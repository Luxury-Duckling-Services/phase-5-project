class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :training_location
      t.string :achievement_goal

      t.timestamps
    end
  end
end
