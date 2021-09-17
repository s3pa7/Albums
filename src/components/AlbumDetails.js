
import { useSelector} from  'react-redux';
import {Fragment} from "react";
import AlbumItem from "./AlbumItem";

const AlbumDetails = (props) => {
    const getAlbums = useSelector(state => state.root.albums);
    const albumId = useSelector(state => state.fav.items);
    const getAlbumDetails = [];
    if(props.album){
        for (const key in getAlbums) {
            if(props.album === getAlbums[key].albumId){
                getAlbumDetails.push({
                    id:getAlbums[key].id,
                    title:getAlbums[key].title,
                    thumbnailUrl:getAlbums[key].thumbnailUrl,
                    url:getAlbums[key].url,
                })
            }

        }
    }


    for(const a in getAlbumDetails) {
        for(const k in albumId){
            if(props.album === albumId[k].albumId){
                if(getAlbumDetails[a].id == albumId[k].imageId){
                    getAlbumDetails[a].favorite = 1;
                }
            }
        }
    }



    const detailsByAlbum =  getAlbumDetails.map((item) =>
        <AlbumItem
            id={item.id}
            key={item.id}
            title={item.title}
            thumbnailUrl={item.thumbnailUrl}
            url={item.url}
            albumId={props.album}
            favorite={item.favorite ? item.favorite : 0}
        />

    );


    return (
        <Fragment>
            {detailsByAlbum}
        </Fragment>
    )
}

export default AlbumDetails;