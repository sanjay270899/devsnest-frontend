import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
};

type Props = {
    classes?: {
        root: string,
        grow: string
    }
    children?: React.ReactNode
}
const Header: React.FC = (props: Props) => {
    const { classes } = props;
    return (
        <div className={classes? classes.root: undefined}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes ? classes.grow : undefined}>
                        MyClass
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};


export default withStyles(styles)(Header);
