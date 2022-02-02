import { useState, useEffect } from "react";



export const LayoutResults = (props) =>
{
    
    const [currentRoomLayouts, updateRoomLayouts] = useState([])

    const [roomPics, updatePics] = useState([])

    useEffect(()=>{
        console.log("submit updated on room " + props.roomId)
    }, [props.submitClicked])

    //initializes the pic state
    useEffect(()=>{
        fetch(`http://localhost:8088/roomPics`)
        .then(data => data.json()) 
        .then(info => updatePics(info))
    },[props.submitClicked])

    //useEffect will keep track of when submit is hit by refreshing the room
    useEffect(()=>{
        fetch(`http://localhost:8088/rooms/${props.roomId+1}`)
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
    <div key={props.roomId}>
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