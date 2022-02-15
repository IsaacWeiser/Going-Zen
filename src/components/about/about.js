import "./about.css"
import { Typography } from "@mui/material"
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';


export const ResourcePage = () =>
{

    return (
        <>
        <div id="about">
        <Typography id="about-title" variant="h2">About Feng Shui</Typography>
        <Typography>Feng shui also known as Chinese geomancy, is an ancient Chinese traditional practice which claims 
            to use energy forces to harmonize individuals with their surrounding environment. The term feng shui means, 
            literally, "wind-water". From ancient times, landscapes and bodies of water were thought to direct the flow of 
            the universal Qi – “cosmic current” or energy – through places and structures. Because Qi has the same patterns
             as wind and water, a specialist who understands them can affect these flows to improve wealth, happiness, long 
             life, and family; on the other hand, the wrong flow of Qi brings bad results. More broadly, feng shui includes 
             astronomical, astrological, architectural, cosmological, geographical, and topographical dimensions.[3] [4]

             Historically, as well as in many parts of the contemporary Chinese world, feng shui was used to orient 
             buildings and spiritually significant structures such as tombs, as well as dwellings and other structures. 
             One scholar writes that in contemporary Western societies, however, “feng shui tends to be reduced to 
             interior design for health and wealth. It has become increasingly visible through 'feng shui consultants' 
             and corporate architects, who charge large sums of money for their analysis, advice, and design.”[4]
</Typography>
<Typography variant="h4">Principles</Typography>

<Box sx={{ width: "100%", maxWidth: 360 }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Wealth" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Fame" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Partnership" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Family" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Tai Chi" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Children" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Knowledge" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Career" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Helpful People" />
          </ListItem>
        </List>
      </nav>
    </Box>


<Typography variant="h4">Resources</Typography>
<Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <Link href="https://www.thespruce.com/what-is-feng-shui-1275060">
              <ListItemText primary="What Is Feng Shui" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <Link href="https://www.thespruce.com/create-good-feng-shui-in-your-home-1275057">
              <ListItemText primary="Create Good Feng Shui In Your House" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <Link href="https://www.craneandcanopy.com/pages/101-what-is-feng-shui">
              <ListItemText primary="Feng Shui 101" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <Link href="https://www.nationalgeographic.org/encyclopedia/feng-shui/">
              <ListItemText primary="National Geographic Feng Shui" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <Link href="https://en.wikipedia.org/wiki/Feng_shui">
              <ListItemText primary="Wikipedia: Feng Shui" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>


</div>
        </>
    )
}