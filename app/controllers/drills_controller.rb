class DrillsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Drill.all
    end

    def create
        drill = Drill.create!(drill_params)
        render json: drill, status: :created
    end

    def update
        drill = Drill.find(params[:id])
        drill.update!(drill_params)
        render json: drill, status: :ok
    end

    private
    
    def drill_params
        params.permit(:user_id, :drill_title, :instruction, :sports_category_id, :video_data)
    end
end
