class FollowingsController < ApplicationController

    private
    
    def following_params
        params.permit()
    end
end
