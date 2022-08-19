class Drill < ApplicationRecord
    has_one_attached :video_data

    validates :drill_title, presence: true
    validates :instruction, presence: true
    validates :sports_category_id, presence: true
    
    belongs_to :user
    belongs_to :sports_category

    
end
