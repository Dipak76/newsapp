import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import { createTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';

import categories from '../data/category';

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingLeft:10,
    paddingRight:5,
    backgroundColor:'#f44336',
    fontSize:20,
  },
  fullList: {
    width: 'auto',
  },
  listmenu: {
    fontStyle:'bold',
    
  }
});





export default function SwipeableTemporaryDrawer({setCategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    left: false,
  });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme1 = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );





  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem>
            Categories 
          </ListItem>
        
      </List>
      <Divider />
      <List className={classes.listmenu}>
        {categories.map((text, index) => (
          <ListItem  style={{ height: 115, borderRadius: 3 ,fontWeight:100}} button key={text}  onClick={() => setCategory(text)}>
            
            <ListItemText  primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
             <MenuIcon />Menu
          </Button>
          <ThemeProvider theme={theme1}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
      
    </div>
  );
}