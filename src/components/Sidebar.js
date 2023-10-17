import React, { useState } from 'react'; import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useMediaQuery from '@mui/material/useMediaQuery';


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [highlightedItem, setHighlightedItem] = useState('Dashboard');

    const sidebarItems = [
        { icon: <SensorOccupiedOutlinedIcon />, name: 'Dashboard' },
        { icon: <ProductionQuantityLimitsOutlinedIcon />, name: 'Product' },
        { icon: <AccountBoxOutlinedIcon />, name: 'Customers' },
        { icon: <AccountBalanceWalletOutlinedIcon />, name: 'Income' },
        { icon: <DangerousOutlinedIcon />, name: 'Promote' },
        { icon: <LiveHelpOutlinedIcon />, name: 'Help' },

    ];

    const handleItemClick = (name) => {
        setHighlightedItem(name);
        if (window.innerWidth < 600) {
            // Close the sidebar on mobile view after item click
            setOpen(true);
        }
    };


    const isMobile = useMediaQuery('(max-width:600px)');


    return (
        <div>
            {isMobile && (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setOpen(!open)}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? open : true}
                onClose={() => setOpen(false)}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    backgroundColor: '#2196F3',
                    color: '#fff',
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        backgroundColor: '#040440',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    },
                }}
            >
                <List>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px' }}>
                        <ModeStandbyIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        <h2>Dashboard</h2>
                    </div>

                    {sidebarItems.map((item) => (
                        <ListItem
                            key={item.name}
                            button
                            style={{
                                backgroundColor: highlightedItem === item.name ? '#2d2d69' : '#040440',
                                cursor: 'pointer',

                            }}
                            onClick={() => handleItemClick(item.name)}
                        >
                            <ListItemIcon>{React.cloneElement(item.icon, { style: { color: highlightedItem === item.name ? '#fff' : '#424471' } })}</ListItemIcon>
                            <ListItemText primary={<span style={{ color: highlightedItem === item.name ? '#fff' : '#424471' }}>{item.name}</span>} />
                            <ListItemIcon>
                                {highlightedItem !== item.name && <ListItemIcon><KeyboardArrowRightIcon style={{ color: '#424471' }} /></ListItemIcon>}

                            </ListItemIcon>

                        </ListItem>
                    ))}
                </List>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '1px', backgroundColor: '#2d2d69', paddingLeft: "10px" }}>
                    <Avatar src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="Avatar" />
                    <div style={{ marginLeft: '15px', color:'GrayText'}}>
<h5>Evano<br/>Project Manager</h5>
</div>
                    <ListItemIcon style={{ marginLeft: 'auto', color: '#424471' }}>
                        <KeyboardArrowDownIcon />
                    </ListItemIcon>
                </div>
            </Drawer>
        </div>

    );
};

export default Sidebar;
