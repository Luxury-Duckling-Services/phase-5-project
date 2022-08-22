class WorkoutSessionsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: WorkoutSession.all
    end

    def create
        workout_session = WorkoutSession.create!(workout_session_params)
        render json: workout_session, status: :created
    end

    private
    
    def workout_session_params
        params.permit(:user_id, :workout_session_title, :description, :sports_category_id)
    end
end
