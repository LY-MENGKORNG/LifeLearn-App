import { Avatar, ListItemIcon } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { responsiveLayout } from "../../assets/BaseStyle";
import AppLogo from "../../components/AppLogo";
import * as React from 'react';
import { Link } from "react-router-dom";

export default function WebHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropdownItems = [
    {
      path: '/profile',
      name: "Profile", icon: (
        <ListItemIcon>
          <Avatar />
        </ListItemIcon>
      )
    },
    {
      path: '/',
      name: "Logout",
      icon: (
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
      )
    },
    {
      path: '/settings',
      name: "Settings",
      icon: (
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
      )
    },
  ];

  return (
    <div className={"sticky left-0 top-0 z-50 w-full flex justify-between items-center py-3 border-b backdrop-blur-lg" + responsiveLayout}>
      <AppLogo />
      <div className="flex gap-2 items-center ">
        <IconButton color="warning" className="relative " >
          <span className="absolute h-2 w-2 rounded-full top-3 right-3 main-yellow" />
          <NotificationsIcon aria-busy="true" />
        </IconButton>

        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {dropdownItems.map((item, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <Link to={item.path}>
                {item.icon} {item.name}
              </Link>
            </MenuItem>
          ))}
          {/* <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem> 
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem> */}
        </Menu>
      </div>
    </div>
  )
}
