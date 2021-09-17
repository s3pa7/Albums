
import classes from './AlbumItem.module.css'

import img from '../images/heart.svg';
import imgRed from '../images/heart _red.svg';

import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
const AlbumItem = (props) => {
    const dispatch = useDispatch();
    const [images, setImages] = useState(false);



    const imgActionHandler = (event) =>  {

        dispatch({
            type:'favoriteImage',
            payload:event.currentTarget.id,
            albumId:props.albumId
        })
        setImages(true);


    }

    useEffect(() => {
        if(props.favorite === 1){
            setImages(true);
        }
    },[])


    return (
        <div className={classes.gallery}>
            <a target="_blank">

                <img  src={props.thumbnailUrl} alt="A table full of delicious food!"/>
            </a>
            {images && <img id={props.id} src={imgRed} className={classes.img} onClick={imgActionHandler} alt="Heart"/>}
            {!images && <img id={props.id} src={img} className={classes.img} onClick={imgActionHandler} alt="Heart"/>}
            <div className={classes.desc}>{props.title}</div>
        </div>
    )

}
export default AlbumItem;