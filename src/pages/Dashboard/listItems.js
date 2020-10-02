import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LayersIcon from '@material-ui/icons/Layers';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



export const mainListItems = (
  <div>


<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NavLink  to="/Dashboard">Dashboard</NavLink>
    </ListItem>
    <ListItem  button>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <NavLink  to="/Clients">Clients</NavLink>
    </ListItem>

    <ListItem  button>
      <ListItemIcon>
      <GroupWorkIcon />
      </ListItemIcon>
      <NavLink  to="/EquipeD">Equipe</NavLink>
    </ListItem>

    <ListItem  button>
      <ListItemIcon>
      <GroupWorkIcon />
      </ListItemIcon>
      <NavLink  to="/ContactD">Contact</NavLink>
    </ListItem>

    <ListItem  button>
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <NavLink  to="/Projets">Projets</NavLink>
    </ListItem>
    <ListItem  button>
        <ListItemIcon>
            <FolderIcon />
        </ListItemIcon>
        <NavLink  to="/Realisation">Realisations</NavLink>
    </ListItem>
    <ListItem  button>
        <ListItemIcon>
            <DescriptionIcon />
        </ListItemIcon>
        <NavLink  to="/Articles">Articles</NavLink>
    </ListItem>


    </Tab.Container>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
    
  </div>
);
