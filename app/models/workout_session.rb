class WorkoutSession < ApplicationRecord

    validates :workout_session_title, presence: true
    validates :description, presence: true
    validates :sports_category_id, presence: true

    belongs_to :user
    belongs_to :sports_category
    
    has_many :drill_session_joins
    has_many :drills, through: :drill_session_join
end
