import { Link } from "react-router-dom";
import "../nav/navbar.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";

export const NavBar = () => {

   /* const history= useHistory()

    //this wil; handle the logic for the routing of the select options
    const route=(event)=>
    {
        const option = parseInt(event.target.value)
        console.log("opt "+option)
        if (option > 0 && option <4)
        {
            if(option === 1)
            {
                history.push(`/`)
                document.querySelector("#dropdown").value=0
            }
            else if(option === 2)
            {
                history.push(`/profile`)
                document.querySelector("#dropdown").value=0
            }
            else if (option === 3)
            {
                history.push(`/favorites`)
                document.querySelector("#dropdown").value=0
            }
            else if (option === 4)
            {
                window.localStorage.removeItem("zen_user")
                history.push('/')
                document.querySelector("#dropdown").value=0
            }
        }
    }

    return(
        <ul className="navbar">
            <li className="navbar__item active">
                <Link  className="navbar__link" to="/about">
                    About
                </Link>
            </li>
            <li className="navbar__item active">
                <Link  className="navbar__link" to="/profile">
                    <img id="profile--img" src="background/ZEN_ref.png"></img>
                </Link>
            </li>
            <li className="navbar__item active">
                    <select id="dropdown" onChange={(evt)=>{route(evt)}}>
                        <option id="profile-options" value="0">
                            Select an option
                        </option>
                        <option id="option--profile" className="profile-options" value="1">
                            Home
                        </option>
                        <option id="option--favorite" className="profile-options" value="2">
                        Profile
                        </option>
                        <option id="option--logout" className="profile-options" value="3">
                        Favorites
                        </option>
                        <option id="option--logout" className="profile-options" value="4">
                            Logout
                        </option>
                    </select>
            </li>
        </ul>
    )
    */

    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <>
      <article className="navbar">
          <section>
    <Stack direction="row" spacing={2}>
      <div>
        <IconButton
          fontSize="large"
          style={{ width: 250, size: "50px" }}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
            <MenuIcon sx={{ fontSize: 40 }} />
          Menu
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <HomeIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <InfoIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>About</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <StarIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Favorites</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Log Out</ListItemText>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
    </section>
    <section id="logo">
    <img id="profile--img" src="background/ZEN_ref.png"></img>
    </section>
    </article>
    </>
  );
}