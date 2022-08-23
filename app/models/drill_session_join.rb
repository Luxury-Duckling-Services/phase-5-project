class DrillSessionJoin < ApplicationRecord
    belongs_to :drill
    belongs_to :workout_session
end
