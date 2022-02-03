import { useState, useEffect } from "react";
import "../profile/faves.css"

export const FavesList = () =>
{
    const [faves, updateFaves] = useState([])
    const [pics, updatePics] = useState([])
    const [deleted, updateDelete] = useState(0)

    useEffect(()=>{
        console.log("faves state: " + JSON.stringify(faves))
        fetch(`http://localhost:8088/roomPics`)
        .then(pics=>pics.json())
        .then((pics)=>{
            let urls = []
            faves.map(fave=> fave.room.roomPicIds.map(roomPicId =>{
                console.log("fave.room.roomPicIds[]: " + JSON.stringify(roomPicId))
                pics.map(picObj=>{
                    console.log("pics.map picObj: " + JSON.stringify(picObj))
                    //console.log(`picObj.id: ${picObj.id}  roompicid: ${roomPicId}  fave.roomId: ${fave.roomId}`)
                    if (picObj.id === fave.roomPicId && fave.roomPicId === roomPicId)
                    {
                        console.log(`picObj.id: ${picObj.id}  roompicid: ${roomPicId}  fave.roomId: ${fave.roomId}  fave.roomPicId: ${fave.roomPicId}`)
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
        .then(()=> console.log("faves state: " + JSON.stringify(faves)))
    },[deleted])


    const deleteFave = (evt) =>
    {
        fetch(`http://localhost:8088/favorites/${parseInt(evt.target.id.substring(13))}`, {method:"DELETE"})
        .then(()=>updateDelete(deleted+1))

    }

    return(
        <>
        <h2>Your Faves</h2>
        {
            pics.map(picObj=>{
                console.log("id? "+JSON.stringify(picObj))
                return <div>
                    <h3>{picObj.name}</h3>
                    <img class="faveimg" src={`room_layouts/${picObj.url}`} />
                    <div>
                        <button id={`del-btn--fave${picObj.id}`} onClick={deleteFave} >Delete Fave</button>
                    </div>
                </div>
            })
        }
        </>
    )
}