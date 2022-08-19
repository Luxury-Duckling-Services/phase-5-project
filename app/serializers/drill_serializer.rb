class DrillSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :drill_title, :instruction, :video_data
  
  belongs_to :user
  belongs_to :sports_category

  def video_data
    rails_blob_path(object.video_data, only_path: true) if object.video_data.attached?
  end
end
