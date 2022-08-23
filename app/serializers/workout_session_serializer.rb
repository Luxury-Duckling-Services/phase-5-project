class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :workout_session_title, :description

  belongs_to :user
  belongs_to :sports_category

  has_many :drill_session_joins
  has_many :drills, through: :drill_session_joins
  
end
