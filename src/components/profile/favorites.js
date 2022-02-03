import { useState, useEffect } from "react";

export const FavesList = () =>
{
    const [faves, updateFaves] = useState([])
    const [pics, updatePics] = useState([])

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
                    if (picObj.id === roomPicId)
                    {
                        console.log(`picObj.id: ${picObj.id}  roompicid: ${roomPicId}  fave.roomId: ${fave.roomId}`)
                        urls.push({url:picObj.url, name: fave.room.name})
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
    },[])


    return(
        <>
        <h2>Your Faves</h2>
        {
            pics.map(picObj=>{
                return <div>
                    <h3>{picObj.name}</h3>
                    <img src={`room_layouts/${picObj.url}`} />
                </div>
            })
        }
        </>
    )
}