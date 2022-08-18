class DrillsController < ApplicationController

    private
    
    def drill_params
        params.permit(:user_id, :drill_title, :instruction, :video_data)
    end
end
