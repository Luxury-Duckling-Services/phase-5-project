class FollowingsController < ApplicationController

    def create
        following = Following.create!(friendship_params)
        render json: following, status: :created
    end

    def destroy
        Following.find_by(requester_id: params[:requester_id] , approver_id: params[:approver_id]).destroy
        head :no_content
    end

    def follow_or_not
        
    end

    private
    
    def following_params
        params.permit(:requester_id , :approver_id , :read)
    end
end
