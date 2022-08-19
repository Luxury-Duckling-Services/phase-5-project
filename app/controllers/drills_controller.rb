class DrillsController < ApplicationController

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
