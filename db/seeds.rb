SportsCategory.destroy_all
FavoriteSport.destroy_all

SportsCategory.create(sport_name: "soccer")
SportsCategory.create(sport_name: "basketball")
SportsCategory.create(sport_name: "tennis")
SportsCategory.create(sport_name: "football")
SportsCategory.create(sport_name: "golf")
SportsCategory.create(sport_name: "weight lifting")
SportsCategory.create(sport_name: "running")

FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "soccer").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "basketball").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "tennis").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "football").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "golf").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "weight lifting").first.id)
FavoriteSport.create(user_id: 1, sports_category_id: SportsCategory.where(sport_name: "running").first.id)