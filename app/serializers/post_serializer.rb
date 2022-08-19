class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id , :post_subtitle, :workout_session, :workout_program, :drill_url

  belongs_to :user
  belongs_to :sports_category
  belongs_to :drill
  # belongs_to :workout_session
  # belongs_to :workout_program

  def drill_url
    rails_blob_path(Drill.find(self.object.drill_id).video_data, only_path: true)
  end

  # def drill
  #   Drill.find(self.object.drill_id)
  # end

  def workout_session
    nil
  end

  def workout_program
    nil
  end

end
