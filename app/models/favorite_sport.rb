class FavoriteSport < ApplicationRecord
    belongs_to :sports_category
    belongs_to :user
end
