import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1
    },
}));
  
export const Welcome = () => {
  const classes = useStyles();
    
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="full-bg"></div>
      </main>
    );
}