class FavoriteSportsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        params[:selected_sports_names].each do |name|
            FavoriteSport.create!(user_id: params[:user_id] , sports_category_id: SportsCategory.where(sport_name: name).first.id)
        end
        render json: User.find(params[:user_id]), status: :created
    end

    private
    
    def favorite_sport_params
        params.permit(:selected_sports_names , :user_id)
    end
    
end
