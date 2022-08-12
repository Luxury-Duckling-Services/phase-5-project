class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        if params[:username]
            user = User.find_by(username: params[:username])
        end
        if params[:email]
            user = User.find_by(email: params[:email])
        end
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
