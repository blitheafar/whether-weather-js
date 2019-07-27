import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


//单选框组件
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    formControl: {
        margin: theme.spacing(3)
    },
    group: {
        margin: theme.spacing(1, 0)
    }
}));

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    function handleChange(event) {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (<div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup aria-label="gender" name="gender1" className={classes.group} value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female"/>
                            <FormControlLabel value="male" control={<Radio />} label="Male"/>
                        </RadioGroup>
                    </FormControl>
            </DialogContent>
        </Dialog>
    </div>);
}
