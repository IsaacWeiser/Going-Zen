import { LayoutForm } from "./layoutForm";
import { LayoutResults } from "./layoutResults";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../layout/homeLayout.css"

export const HomeLayout = () => {

    const [roomState, roomRefresh] = useState([])
    const [numOfRooms, updateCount] = useState([])
    const [submitClicked, updateSubmit] = useState(0)

    // this function displays the results section only after user has submitted a layout
    useEffect(()=>{
        if (submitClicked > 0)
        {
        document.querySelector("#resultsList").style.display="block"
        document.querySelector("#resList-name-title").style.display="block"
        }
    }, [submitClicked])

    // this fills out and fetches results options
    useEffect(()=>{
        fetch(`http://localhost:8088/rooms`)
        .then(rms=> rms.json())
        .then(rmsArr=> updateCount(rmsArr.length))
    },[roomState])

    return (
        <>
        <div id="layoutForm">       
        <LayoutForm roomState={roomState} roomUpdater={roomRefresh} superSubmit={updateSubmit} />
        </div>
        <LayoutResults roomId={numOfRooms} submitClicked={submitClicked} roomState={roomState} />
        </>
    )
}