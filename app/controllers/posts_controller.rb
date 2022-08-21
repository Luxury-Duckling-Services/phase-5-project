class PostsController < ApplicationController
    # skip_before_action :authorize, only: :index

    def index
        render json: Post.all
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    private
    
    def post_params
        params.permit(:user_id, :post_subtitle, :sports_category_id , :drill_id , :workout_program_id , :workout_session_id)
    end
end