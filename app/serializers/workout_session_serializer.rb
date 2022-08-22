class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :workout_session_title, :description

  belongs_to :user
  belongs_to :sports_category
  
end
