class WorkoutSessionsController < ApplicationController
    # skip_before_action :authorize, only: [ :index , :show]

    def index
        render json: WorkoutSession.all
    end

    def create
        workout_session = WorkoutSession.create!(workout_session_params)
        render json: workout_session, status: :created
    end

    def show
        render json: DrillSessionJoin.where( workout_session_id: params[:id] ).sort_by { |obj| obj.index }.map { |join| { set: join.set , rep: join.rep , rest_time: join.rest_time, **JSON.parse(join.drill.to_json)} }
    end

    private
    
    def workout_session_params
        params.permit(:user_id, :workout_session_title, :description, :sports_category_id)
    end
end
