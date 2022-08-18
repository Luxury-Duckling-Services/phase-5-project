class SportsCategory < ApplicationRecord
    has_many :favorite_sports
    has_many :users, through: :favorite_sports

    has_many :drills
end
