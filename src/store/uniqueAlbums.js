const  INITIAL_STATE = { data: {}};

const uniqueAlbums = (state=INITIAL_STATE, action) => {


    if(action.type === 'uniqueAlbums'){

        return {
            ...state,
            uniqueAlbums: action.uniqueAlbums
        }
    }
    return state;
}
export default uniqueAlbums;


