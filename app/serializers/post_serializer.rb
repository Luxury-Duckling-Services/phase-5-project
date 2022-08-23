class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :post_subtitle, :workout_session, :workout_program, :drill, :workout_session , :workout_session_title , :workout_program, :created_at

  belongs_to :user
  belongs_to :sports_category
  
  # belongs_to :drill
  # belongs_to :workout_session
  # belongs_to :workout_program

  def created_at
    object.created_at.in_time_zone("America/Los_Angeles").strftime("%Y-%m-%d %H:%M")
  end

  def drill
    if self.object.drill_id
      drill_hash = JSON.parse( Drill.find( self.object.drill_id ).to_json )
      drill_hash.store( :video_data , rails_blob_path(Drill.find(self.object.drill_id).video_data, only_path: true) )
      return drill_hash
    else
      return nil
    end
  end

  def workout_session
    if self.object.workout_session_id
      return WorkoutSession.find( self.object.workout_session_id ).drills
    else
      return nil
    end
  end

  def workout_session_title
    if self.object.workout_session_id
      return WorkoutSession.find( self.object.workout_session_id ).workout_session_title
    else
      return nil
    end
  end

  def workout_program
    nil
  end

end
