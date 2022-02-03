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

    const saveLayout=(evt)=>{

        const faveObj =
        {
            roomId: parseInt(props.roomId+1),
            userId: parseInt(localStorage.getItem("zen_user")),
            roomPicId: parseInt(evt.target.id.substring(10))
        }

        let postOp =
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(faveObj)
        }

        fetch(`http://localhost:8088/favorites`, postOp)
        .then(()=> console.log("saved fave"))
    }


    return (
    <>
    <div key={props.roomId}>
    <h2>Results</h2>
    {
         currentRoomLayouts.map(roomPic=>{
            return <div id="imageResult" >
                <img className="resultImg" key={`img--${roomPic.id}`} src={`room_layouts/${roomPic.url}`} />
                <div>
                    <button onClick={saveLayout} id={`btn-save--${roomPic.id}`}>Save</button>
                    </div>
                   </div>
        })
    }    
    </div>
    </>
    )
}