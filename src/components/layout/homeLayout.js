import { LayoutForm } from "./layoutForm";
import { LayoutResults } from "./layoutResults";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../layout/homeLayout.css"

export const HomeLayout = () => {

    const [roomState, roomRefresh] = useState([])
    const [numOfRooms, updateCount] = useState([])
    const [submitClicked, updateSubmit] = useState(0)

    useEffect(()=>{
        if (submitClicked > 0)
        {
        document.querySelector("#resultsList").style.display="block"
        }
    }, [submitClicked])

    useEffect(()=>{
        fetch(`http://localhost:8088/rooms`)
        .then(rms=> rms.json())
        .then(rmsArr=> updateCount(rmsArr.length))

    },[roomState])

    return (
        <>
       <LayoutForm roomState={roomState} roomUpdater={roomRefresh} superSubmit={updateSubmit} />
       
        <div id="resultsList">
            {
        <LayoutResults roomId={numOfRooms} submitClicked={submitClicked} />
            }
        </div>
        </>
    )
}