import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ResultsList } from "./layoutResults";

export const LayoutForm = () =>
{
    const [room, updateRoom] = useState([])

     //this state tracks submissions
     const [submit, updateSub] = useState(0)

    const history = useHistory()

    //use effect for initial render and creates an object in which the initial values are set to false
    useEffect(()=>{
        const startingState =
        {
            name:"",
            hasNightstand:false,
            hasDresser:false,
            hasTable:false,
            roomPicIds: []
        }

        //dom clear
        document.querySelector("#nameInput").value="";
        document.querySelector("#nightstandSelect").checked=false;
        document.querySelector("#dresserSelect").checked=false;
        document.querySelector("#tableSelect").checked=false;

        updateRoom(startingState)
    },[submit])

   

    const imageAssigner = (room) =>
    {
        //sort out which images correspond to this room
        let correspondingImgs = []
        if (room.hasDresser === true && room.hasTable === false && room.hasNightstand === false)
        {
            correspondingImgs = [1]
        } 
        else if (room.hasDresser === false && room.hasTable === true && room.hasNightstand === false)
        {
            correspondingImgs = [4]
        }
        else if (room.hasDresser === false && room.hasTable === false && room.hasNightstand === true)
        {
            correspondingImgs = [2]
        }
        else if (room.hasDresser === true && room.hasTable === true && room.hasNightstand === false)
        {
            correspondingImgs = [5]
        }
        else if (room.hasDresser === false && room.hasTable === true && room.hasNightstand === true)
        {
            correspondingImgs = [6]
        }
        else if (room.hasDresser === true && room.hasTable === false && room.hasNightstand === true)
        {
            correspondingImgs = [3]
        }
        else if (room.hasDresser === true && room.hasTable === true && room.hasNightstand === true)
        {
            correspondingImgs = [7,8]
        }
        else if (room.hasDresser === false && room.hasTable === false && room.hasNightstand === false)
        {
            correspondingImgs = [1]
        }

        return correspondingImgs
    }




    // this function prevents the "blink" and pushes the users room to the db
    const submitRoom = (evt) =>
    {
        evt.preventDefault();

        const postOp =
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(room)
        }

       return fetch(`http://localhost:8088/rooms`, postOp)
        .then(()=>updateSub(submit+1))
        
    }
    

    return (
        <>
        <form className="layoutForm">
        <h2 className="layoutForm--title">Bed Room</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Room Name: </label>
                <input
                id ="nameInput"
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Name of the room"
                onChange=
                {(event)=>
                    {
                    let copy  = {...room};
                    copy.name = event.target.value
                    updateRoom(copy)
                    }
                }
                />
            </div>
        </fieldset>
        <h2 className="layoutForm--title">Furniture</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Night Stand </label>
                <input
                id="nightstandSelect"
                required autoFocus
                type="checkbox"
                onChange=
                {(event)=>
                    {
                    let copy  = {...room};
                    copy.hasNightstand = event.target.checked
                    copy.roomPicIds = imageAssigner(copy)
                    updateRoom(copy)
                    }
                }
                />
                <label htmlFor="name">Dresser </label>
                <input
                id="dresserSelect"
                required autoFocus
                type="checkbox"
                onChange=
                {(event)=>
                    {
                    let copy  = {...room};
                    copy.hasDresser = event.target.checked
                    copy.roomPicIds = imageAssigner(copy)
                    updateRoom(copy)
                    }
                }
                />
                <label htmlFor="name">Table </label>
                <input
                id="tableSelect"
                required autoFocus
                type="checkbox"
                onChange=
                {(event)=>
                    {
                    let copy  = {...room};
                    copy.hasTable = event.target.checked
                    copy.roomPicIds = imageAssigner(copy)
                    updateRoom(copy)
                    }
                }
                />
            </div>
        </fieldset>
        <button className="newEmp--btn" onClick={submitRoom}>submit</button>
    </form>
    </>
    )
}