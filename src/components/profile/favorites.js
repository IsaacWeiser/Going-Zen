import { useState, useEffect } from "react";
import "../profile/faves.css"
import { Typography, ImageListItemBar, ImageList, ImageListItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export const FavesList = () =>
{
    const [faves, updateFaves] = useState([])
    const [pics, updatePics] = useState([])
    const [deleted, updateDelete] = useState(0)

    useEffect(()=>{
        fetch(`http://localhost:8088/roomPics`)
        .then(pics=>pics.json())
        .then((pics)=>{
            let urls = []
            faves.map(fave=> fave.room.roomPicIds.map(roomPicId =>{
                                pics.map(picObj=>{
                    if (picObj.id === fave.roomPicId && fave.roomPicId === roomPicId)
                    {
                        urls.push({url:picObj.url, name: fave.room.name, id:fave.id})
                    }
                })
            }))
            return updatePics(urls);
        })
        
    },[faves])

    useEffect(()=>{
        fetch(`http://localhost:8088/favorites?_expand=room&expand_roomPics`)
        .then((faves)=> faves.json())
        .then((faves)=>{
            return updateFaves(faves.filter(fave=>fave.userId === parseInt(localStorage.getItem("zen_user"))))
        })
    },[deleted])


    const deleteFave = (faveId) =>
    {
        fetch(`http://localhost:8088/favorites/${parseInt(faveId)}`, {method:"DELETE"})
        .then(()=>updateDelete(deleted+1)) 

        

    }

    return(
        <>
        <div id="favestitle">
        <Typography variant="h2" id="faves-title">Your Faves</Typography>
        </div>
        <div className="result-list" id="faves-list">
        <ImageList sx={{width:'85%', height:'auto'}} cols={1} rowheight={'auto'}>
            {
                pics.map(picObj=>(
                    <ImageListItem key={`listItem--${picObj.id}`}>
                        <img 
                            id={`img--${picObj.id}`}
                            src={`room_layouts/${picObj.url}`}
                            srcSet={`room_layouts/${picObj.url}`}
                            loading="lazy"
                            height="25px"
                        />
                        <ImageListItemBar
                            sx={{
                                background:
                                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                              }}
                            title={`layout--${picObj.name}`} 
                            position="top" 
                            id={`listItemBar--${picObj.id}`}
                            actionIcon={
                                <IconButton
                                    sx={{color: 'white'}}
                                    aria-label={`trash delete`}
                                    id={`delete-btn--${picObj.id}`}
                                    onClick={()=>deleteFave(picObj.id)}
                                    >
                                        <DeleteIcon id={`delete-img--${picObj.id}`} sx={{color: 'red'}} />
                                    </IconButton>
                            }
                            actionPosition="right"
                            />
                            </ImageListItem>
                ))}
                </ImageList>
                </div>
        </>
    )
}