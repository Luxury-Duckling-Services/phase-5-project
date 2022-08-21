Drill.destroy_all
FavoriteSport.destroy_all
Following.destroy_all
Post.destroy_all
SportsCategory.destroy_all
User.destroy_all
WorkoutProgram.destroy_all
WorkoutSession.destroy_all

SportsCategory.create(sport_name: "soccer" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg")
SportsCategory.create(sport_name: "basketball" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png")
SportsCategory.create(sport_name: "tennis" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tennis_ball2.jpg")
SportsCategory.create(sport_name: "football" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Wilson_American_football.jpg")
SportsCategory.create(sport_name: "golf" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golf_ball_resting_near_fairway_wood.jpg")
SportsCategory.create(sport_name: "weight lifting" , sport_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chrome_dumbbells.jpg/2560px-Chrome_dumbbells.jpg")