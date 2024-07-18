export const isAlreadyFavorite = ({meetUp, favoriteList}) => {
    return favoriteList?.some(fav=> meetUp.id === fav.id)
}
  
export const addToFavorites = ({favoriteList, meetUp, hook}) => {
    const itemIndex = favoriteList.findIndex(fav => fav.id === meetUp.id);
    if (itemIndex !== -1) {
        hook(prev => prev.filter(fav => fav.id !== meetUp.id))
    } else {
        console.log('entered new meetup');
        hook(prev=> [...prev, meetUp])
    }
}