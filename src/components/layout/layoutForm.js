import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {Button, Typography, Checkbox, FormControlLabel, TextField} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


export const LayoutForm = (props) => {
  const [room, updateRoom] = useState([]);

  //this state tracks submissions
  const [submit, updateSub] = useState(0);

  //use effect for initial render and creates an object in which the initial values are set to false
  useEffect(() => {
    const startingState = {
      name: "Your Un-named Room",
      hasNightstand: false,
      hasDresser: false,
      hasTable: false,
      roomPicIds: [28, 29],
    };

    //dom clear
    document.querySelector("#nameInput").value = "";
    document.querySelector("#nightstandSelect").checked = false;
    document.querySelector("#dresserSelect").checked = false;
    document.querySelector("#tableSelect").checked = false;

    updateRoom(startingState);
  }, [submit]);

  const imageAssigner = (room) => {
    //sort out which images correspond to this room
    let correspondingImgs = [];
    if (
      room.hasDresser === true &&
      room.hasTable === false &&
      room.hasNightstand === false
    ) {
      correspondingImgs = [1, 2, 3, 4];
    } else if (
      room.hasDresser === false &&
      room.hasTable === true &&
      room.hasNightstand === false
    ) {
      correspondingImgs = [12, 13, 14, 15];
    } else if (
      room.hasDresser === false &&
      room.hasTable === false &&
      room.hasNightstand === true
    ) {
      correspondingImgs = [5, 6, 7];
    } else if (
      room.hasDresser === true &&
      room.hasTable === true &&
      room.hasNightstand === false
    ) {
      correspondingImgs = [16, 17, 18, 19];
    } else if (
      room.hasDresser === false &&
      room.hasTable === true &&
      room.hasNightstand === true
    ) {
      correspondingImgs = [20, 21, 22, 23];
    } else if (
      room.hasDresser === true &&
      room.hasTable === false &&
      room.hasNightstand === true
    ) {
      correspondingImgs = [8, 9, 10, 11];
    } else if (
      room.hasDresser === true &&
      room.hasTable === true &&
      room.hasNightstand === true
    ) {
      correspondingImgs = [24, 25, 26, 27];
    } else if (
      room.hasDresser === false &&
      room.hasTable === false &&
      room.hasNightstand === false
    ) {
      correspondingImgs = [28, 29];
    }

    return correspondingImgs;
  };

  // this function prevents the "blink" and pushes the users room to the db
  const submitRoom = (evt) => {
    evt.preventDefault();

    let postOp = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    };

    fetch(`http://localhost:8088/rooms`, postOp)
      .then(() => updateSub(submit + 1))
      .then(() => props.superSubmit(submit + 1));
  };

  return (
    <>
    <article>
      <form className="layoutForm">
          <section className="roomNameInput">
          <div>
        <Typography className="layoutForm--title" variant="h4">
          Bed Room
        </Typography>
        </div>
        <div>
        <fieldset id="roomName">
          <div className="form-group">
            <TextField
              id="nameInput"
              className="form-control"
              placeholder="name of bedroom"
              onChange={(event) => {
                let copy = { ...room };
                copy.name = event.target.value;
                if(copy.name === "")
                {
                    copy.name= "Your Un-Named Room"
                    updateRoom(copy)
                }
                updateRoom(copy);
                props.roomUpdater(copy);
              }}
            />
          </div>
        </fieldset>
        </div>
        </section>
        <section id="bottomRow" >
            <div>
        <section id="furnitureChoices">
            <div>
        <Typography className="layoutForm--title" variant="h4">
            Furniture
        </Typography>
        </div>
        <div>
        <fieldset>
          <div className="form-group">
          <FormControlLabel control={
            <Checkbox  id="nightstandSelect" onChange={(event) => {
                let copy = { ...room };
                copy.hasNightstand = event.target.checked;
                copy.roomPicIds = imageAssigner(copy);
                updateRoom(copy);
                props.roomUpdater(copy);
              }} />} label="Night Stand" />              
            <FormControlLabel control={
            <Checkbox  id="dresserSelect" onChange={(event) => {
                let copy = { ...room };
                copy.hasDresser = event.target.checked;
                copy.roomPicIds = imageAssigner(copy);
                updateRoom(copy);
                props.roomUpdater(copy);
              }} />} label="Dresser" />
            <FormControlLabel control={
            <Checkbox  id="tableSelect" onChange={(event) => {
                let copy = { ...room };
                copy.hasTable = event.target.checked;
                copy.roomPicIds = imageAssigner(copy);
                updateRoom(copy);
                props.roomUpdater(copy);
              }} />} label="Table" />
          </div>
        </fieldset>
        </div>
        </section>
        </div>
        <div id="bttnDiv">
        <Button
          variant="contained"
          className="submit--btn"
          onClick={submitRoom}
        >
          submit
        </Button>
        </div>
        </section>
      </form>
      </article>
    </>
  );
};
