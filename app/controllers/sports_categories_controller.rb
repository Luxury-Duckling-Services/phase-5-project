class SportsCategoriesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: SportsCategory.all
    end
end
