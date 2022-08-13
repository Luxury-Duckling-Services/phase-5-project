class User < ApplicationRecord
    has_secure_password

    has_one_attached :profile_picture

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
end
