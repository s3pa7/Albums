
import React, { useEffect, useState , Fragment } from 'react';
import Select from 'react-select'
import { useSelector , useDispatch } from  'react-redux';
import useHttp from '../hooks/use-http';
import AlbumDetails from '../components/AlbumDetails';
import classes from './Albums.module.css';



const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const { isLoading, error, sendRequest: fetchTasks } = useHttp();
    const dispatch = useDispatch();
    const getAlbums = useSelector(state => state.root.albums);
    const uniqueAlbums = useSelector(state => state.unique.uniqueAlbums);

    const [albumId, setAlbumId] = useState(false);

    useEffect(() => {
        const transformTasks = (tasksObj) => {
            dispatch(
                {
                    type: 'setData',
                    albums:tasksObj
            })
            const uniqueAlbum = [];

            for (const taskKey in getAlbums) {
                if(uniqueAlbum.length === 0){
                    uniqueAlbum.push({value: getAlbums[taskKey].albumId , label: 'Album ' + getAlbums[taskKey].albumId});
                }else {
                    let exist = false;
                    for (const key in uniqueAlbum) {

                        if(uniqueAlbum[key].value === getAlbums[taskKey].albumId){
                            exist = true;
                        }
                    }
                    if(!exist){
                        uniqueAlbum.push({value: getAlbums[taskKey].albumId , label: 'Album ' + getAlbums[taskKey].albumId});

                    }


                }
            }
            setAlbums(uniqueAlbum);
            dispatch(
                {
                    type: 'uniqueAlbums',
                    uniqueAlbum:uniqueAlbum
                })

        };
        fetchTasks(
            { url: 'https://jsonplaceholder.typicode.com/photos' },
            transformTasks
        );
    }, [fetchTasks]);


    console.log(uniqueAlbums);

    const showAlbums = (event) => {
        setAlbumId(event.value);
    }


    return (
        <Fragment>
        <section className={classes.select}>
            <p>Albums</p>
        <Select options={albums} onChange={showAlbums}/>

        </section>
            {albumId && <AlbumDetails  album={albumId}/>}
        </Fragment>
    )
}
export default Albums