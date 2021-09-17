const  INITIAL_STATE = { data: {}};

const albumsReducer = (state=INITIAL_STATE, action) => {


    if(action.type === 'setData'){
        return {
            ...state,
            albums: action.albums
        }
    }
    if(action.type === 'uniqueAlbums'){

        return {
            ...state,
            uniqueAlbums: action.uniqueAlbums
        }
    }
    return state;
}
export default albumsReducer;


