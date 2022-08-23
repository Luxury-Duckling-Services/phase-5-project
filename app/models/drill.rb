class Drill < ApplicationRecord
    has_one_attached :video_data

    validates :drill_title, presence: true
    validates :instruction, presence: true
    validates :sports_category_id, presence: true
    
    belongs_to :user
    belongs_to :sports_category
    
    has_many :drill_session_joins
    has_many :workout_sessions, through: :drill_session_join
    
end
