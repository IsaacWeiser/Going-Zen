import { useState, useEffect } from "react";



export const LayoutResults = ({roomId}) =>
{
    console.log("rerender roomid: " + roomId)
    const [currentRoomLayouts, updateRoomLayouts] = useState([])

    const [roomPics, updatePics] = useState([])

    //initializes the pic state
    useEffect(()=>{
        fetch(`http://localhost:8088/roomPics`)
        .then(data => data.json()) 
        .then(info => updatePics(info))
    },[roomId])

    //useEffect will keep track of when submit is hit by refreshing the room
    useEffect(()=>{
        console.log("rmid "+ roomId)
        fetch(`http://localhost:8088/rooms/${roomId}`)
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

            console.log("currRoomPics "+JSON.stringify(currRoomPics))
            
            
            return updateRoomLayouts(currRoomPics)
        })
    }, [roomPics])

    return (
    <>
    <div key={roomId}>
    <h2>Results</h2>
    {
         currentRoomLayouts.map(roomPic=>{
            return <img key={`img--${roomPic.id}`} src={`room_layouts/${roomPic.url}`} />
        })
    }    
    </div>
    </>
    )
}