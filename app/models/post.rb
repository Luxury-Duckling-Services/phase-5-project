class Post < ApplicationRecord

    belongs_to :user
    belongs_to :sports_category
    belongs_to :drill
    # belongs_to :workout_session
    # belongs_to :workout_program

end
