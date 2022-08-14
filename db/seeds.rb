SportsCategory.destroy_all
FavoriteSport.destroy_all

SportsCategory.create(sport_name: "soccer" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg")
SportsCategory.create(sport_name: "basketball" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png")
SportsCategory.create(sport_name: "tennis" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tennis_ball2.jpg")
SportsCategory.create(sport_name: "football" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Wilson_American_football.jpg")
SportsCategory.create(sport_name: "golf" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golf_ball_resting_near_fairway_wood.jpg")
SportsCategory.create(sport_name: "weight lifting" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chrome_dumbbells.jpg/2560px-Chrome_dumbbells.jpg")
SportsCategory.create(sport_name: "badminton" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Shuttlecocks_Yonex_Aerosensa_20.jpg")

FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "soccer").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "basketball").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "golf").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "weight lifting").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "tennis").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "football").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "badminton").first.id)