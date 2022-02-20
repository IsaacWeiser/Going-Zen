import { useState, useEffect } from "react";
import { ImageList, ImageListItem,ImageListItemBar, IconButton} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Typography } from "@mui/material";




export const LayoutResults = (props) =>
{
    let keyVal =0;
    
    const [currentRoomLayouts, updateRoomLayouts] = useState([])

    const [roomPics, updatePics] = useState([])

    const [currRoomName, updateRoomName] = useState("")

    

    useEffect(()=>{
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
            updateRoomName(props.roomState.name)
            return updateRoomLayouts(currRoomPics)
        })
    }, [roomPics])

    const saveLayout=(evt)=>{

        const faveObj =
        {
            roomId: parseInt(props.roomId+1),
            userId: parseInt(localStorage.getItem("zen_user")),
            roomPicId: parseInt(evt)
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
        
        
    }



    return (
    <>
    <Typography id="resList-name-title" variant="h4">{`Layouts for ${currRoomName}`}</Typography>
    <div id="resultsList">
    <div className="result-list">
<ImageList sx={{ width: '75%', height: 'auto' }} cols={1} rowHeight={'auto'}>
      {currentRoomLayouts.map((roomPic) => (
        <ImageListItem key={roomPic.id}>
          <img
            id={roomPic.id}
            src={`room_layouts/${roomPic.url}?auto=format`}
            srcSet={`room_layouts/${roomPic.url}?w=364&h=364&fit=crop&auto=format&dpr=2 1x`}
            loading="lazy"
            height="25px"
          />
           <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={`Layout ${roomPic.id} `}
              position="top"
              id={roomPic.id}
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star fave`}
                  id={`fave-btn--${roomPic.id}`}
                  onClick={()=> {
                      saveLayout(roomPic.id)
                      document.querySelector(`#fave-btn--${roomPic.id}`).style.display="none"
                      document.querySelector(`#star--${roomPic.id}`).style.display="none"
                    }}
                >
                  <StarBorderIcon  id={`star--${roomPic.id}`} sx={{color:'gold'}} />
                </IconButton>
              }
              actionPosition="right"
            />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </div>
    </>
    )
}