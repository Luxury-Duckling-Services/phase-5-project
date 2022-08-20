class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :post_subtitle, :workout_session, :workout_program, :drill, :workout_session, :workout_program

  belongs_to :user
  belongs_to :sports_category
  
  # belongs_to :drill
  # belongs_to :workout_session
  # belongs_to :workout_program

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
    nil
  end

  def workout_program
    nil
  end

end
