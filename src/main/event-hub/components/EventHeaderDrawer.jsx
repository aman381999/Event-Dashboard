import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function SwipeableTemporaryDrawer(props) {
    const { setActiveBtn } = props;

    const [state, setState] = useState({
        top: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: "auto" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='headerButtonMobOpen'>

                <h3 className='pl-4 text-lg font-bold'>EventHub</h3>
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Dashboard', 'Create Event'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleClickItem(text)}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleClickItem = (opt) => {
        if (opt == "Create Event") {
            setActiveBtn("create");
        } else if (opt == "Dashboard") {
            setActiveBtn("dashboard");
        }
    }

    return (
        <div className='eventHeaderContainerMob'>
            <IconButton onClick={toggleDrawer('top', true)} >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
                onOpen={toggleDrawer('top', true)}

            >
                {list('top')}
            </SwipeableDrawer>
        </div>
    );
}
