class FollowingsController < ApplicationController

    def following_or_not
        render json: { following_or_not: Following.where(requester_id: params[:user_id] , approver_id: params[:user_to_view_id]).exists?}
    end

    def toggle_following
        if Following.where(requester_id: params[:requester_id] , approver_id: params[:approver_id]).exists?
            Following.find_by(requester_id: params[:requester_id] , approver_id: params[:approver_id]).destroy
            head :no_content
        else
            following = Following.create!(following_params)
            render json: following, status: :created
        end
    end

    def lists_of_followers_and_followings
        render json: {
            list_of_followers: User.find(params[:user_to_view_id]).requesters,
            list_of_followings: User.find(params[:user_to_view_id]).approvers
        }
    end

    private
    
    def following_params
        params.permit(:requester_id , :approver_id , :read)
    end
end
