import "../nav/navbar.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as React from "react";
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

       const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  //allows you to open and close menu
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



  const history= useHistory()

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
              <Paper id="ismenu">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={()=>{
                      history.push(`/`)
                      handleToggle()
                      }}>
                      <ListItemIcon >
                        <HomeIcon fontSize="small" />
                      </ListItemIcon >
                      <ListItemText >Home</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                      history.push(`/profile`)
                      handleToggle()
                      }}>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                      history.push(`/about`)
                      handleToggle()
                      }}>
                      <ListItemIcon>
                        <InfoIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>About</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                      history.push(`/favorites`)
                      handleToggle()
                      }}>
                      <ListItemIcon>
                        <StarIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Favorites</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                      window.localStorage.removeItem("zen_user");
                      history.push('/')}}>
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