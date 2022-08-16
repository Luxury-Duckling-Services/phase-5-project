class CreateFollowings < ActiveRecord::Migration[6.1]
  def change
    create_table :followings do |t|
      t.integer :requester_id, foreign_key: true
      t.integer :approver_id, foreign_key: true
      t.boolean :read, :default => false
      t.timestamps
    end
  end
end
