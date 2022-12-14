class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  has_many :sports_categories

  attributes :id, :username, :name, :profile_picture

  def profile_picture
    rails_blob_path(object.profile_picture, only_path: true) if object.profile_picture.attached?
  end
  
end