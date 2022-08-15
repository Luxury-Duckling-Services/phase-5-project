class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: User.find(params[:id])
    end

    def show_myself
        render json: @current_user
    end

    def search_username
        render json: User.where("username like ?" , "%#{params[:username]}%")
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    private
    
    def user_params
        params.permit(:username, :email, :name, :password, :password_confirmation, :profile_picture)
    end
end
