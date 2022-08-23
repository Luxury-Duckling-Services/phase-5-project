class DrillSessionJoinsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: DrillSessionJoin.all
    end

    def create
        drill_session_join = DrillSessionJoin.create!(drill_session_join_params)
        render json: drill_session_join, status: :created
    end

    private
    
    def drill_session_join_params
        params.permit(:drill_id , :workout_session_id , :rep , :set , :rest_time , :index)
    end
end
