import { LayoutForm } from "./layoutForm";
import { LayoutResults } from "./layoutResults";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const HomeLayout = () => {

    const [roomState, roomRefresh] = useState([])
    const [numOfRooms, updateCount] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8088/rooms`)
        .then(rms=> rms.json())
        .then(rmsArr=> updateCount(rmsArr.length))

    },[roomState])

    return (
        <>
       <LayoutForm roomState={roomState} roomUpdater={roomRefresh}/>
       
        <div id="resultsList">
            {
        <LayoutResults roomId={numOfRooms} />
            }
        </div>
        </>
    )
}