import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import "./profile.css"
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

export const ProfilePage =() =>
{
    const [currUser, updateUser] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8088/users`)
        .then(users=> users.json())
        .then(users=>{
            updateUser(users.find(user=> user.id === parseInt(localStorage.getItem("zen_user"))))
        })
    },[])

    const history = useHistory();

    return (
        <>
        <div id="profPage">
            <Typography id="prof-title" variant="h2">Profile</Typography>
        <img id="prof-img" src="https://webstockreview.net/images/profile-icon-png.png"></img>
        <Typography variant="h1">{currUser.name}</Typography>
        <Typography variant="h4">{currUser.email}</Typography>
        <Typography variant="h6" onClick={()=> history.push("/favorites")}><Link>View Faves</Link></Typography>
        </div>
        </>
    )
}