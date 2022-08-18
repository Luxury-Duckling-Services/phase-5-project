class Drill < ApplicationRecord
    has_one_attached :video_data
    
    belongs_to :user
    belongs_to :sports_category
end
