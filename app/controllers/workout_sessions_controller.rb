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
        list_of_drill = DrillSessionJoin.where( workout_session_id: params[:id] ).sort_by { |obj| obj.index }.map { |join| { set: join.set , rep: join.rep , rest_time: join.rest_time, **JSON.parse(join.drill.to_json)} }
        render json: {
            list_of_drills_on_workout_page: list_of_drill,
            workout_session_title: WorkoutSession.find( params[:id] ).workout_session_title,
            description: WorkoutSession.find( params[:id] ).description,
            creator: WorkoutSession.find( params[:id] ).user,
            sports_category: WorkoutSession.find( params[:id] ).sports_category
        }
    end

    private
    
    def workout_session_params
        params.permit(:user_id, :workout_session_title, :description, :sports_category_id)
    end
end
