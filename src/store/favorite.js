const  INITIAL_STATE = {
    items: [

    ]
};

const favorite = (state=INITIAL_STATE, action) => {

    if(action.type === 'favoriteImage') {
        const favorite = {
            albumId: action.albumId,
            imageId: action.payload,
        }
        return {
            ...state,
            items: [...state.items, favorite]
        }
    }
    if(action.type === 'RESET'){

        return INITIAL_STATE;

    }

    return state;

}

export default favorite;