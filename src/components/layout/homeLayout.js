import { LayoutForm } from "./layoutForm";
import { LayoutResults } from "./layoutResults";
import { useState } from "react";

export const HomeLayout = () => {

    const [roomState, roomRefresh] = useState([])

    return (
        <>
       <LayoutForm roomState={roomState} roomUpdater={roomRefresh}/>
        
       
        <div id="resultsList">
        <LayoutResults roomId={roomState.id} />
        </div>
        </>
    )
}