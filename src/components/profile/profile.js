import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

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
        <h2>Profile</h2>
        <h1>{currUser.name}</h1>
        <h4>{currUser.email}</h4>
        <h6><a onClick={()=> history.push("/favorites")}>View Faves</a></h6>
        </>
    )
}