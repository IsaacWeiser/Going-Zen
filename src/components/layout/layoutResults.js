import { useState, useEffect } from "react";

const resultsList = (idOfRoom) =>
{
    const [currentRoomLayouts, updateRoom] = useState([])

    //useEffect will keep track of when submit is hit by refreshing the room
    useEffect(()=>{
        fetch(`http://localhost:8088/rooms/${idOfRoom}`)
    }, [currentRoom])

    return (
    <>
    
    </>
    )
}