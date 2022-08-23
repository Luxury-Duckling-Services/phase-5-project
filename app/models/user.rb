class User < ApplicationRecord
    has_secure_password

    has_one_attached :profile_picture

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true

    has_many :favorite_sports
    has_many :sports_categories, through: :favorite_sports

    has_many :following_as_requesters, foreign_key: :requester_id, class_name: "Following"
    has_many :approvers, through: :following_as_requesters

    has_many :following_as_approvers, foreign_key: :approver_id, class_name: "Following"
    has_many :requesters, through: :following_as_approvers

    has_many :drills

    has_many :workout_sessions

    has_many :posts
end
