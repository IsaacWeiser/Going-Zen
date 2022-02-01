import { useState, useEffect } from "react";



export const LayoutResults = ({roomId}) =>
{
    const [currentRoomLayouts, updateRoomLayouts] = useState([])

    const [roomPics, updatePics] = useState([])

    //initializes the pic state
    useEffect(()=>{
        fetch(`http://localhost:8088/roomPics`)
        .then(data => data.json()) 
        .then(info => updatePics(info))
    },[])

    //useEffect will keep track of when submit is hit by refreshing the room
    useEffect(()=>{
        fetch(`http://localhost:8088/rooms/1`)
        .then(room=> room.json())
        .then(room=>{
            let currRoomPics = []
            room.roomPicIds.map(picId =>{
                roomPics.map((picObj)=>
                {
                    if (picId === picObj.id)
                    {
                        currRoomPics.push(picObj)
                    }

                })
            })

            console.log(JSON.stringify(currRoomPics))
            
            
            return updateRoomLayouts(currRoomPics)
        })
    }, [])

    return (
    <>
    <h2>Results</h2>
    {
        currentRoomLayouts.map(roomPic=>{
            return <img key={`img--${roomPic.id}`} src={`room_layouts/${roomPic.url}`} />
        })
    }    
    </>
    )
}