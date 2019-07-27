// 设置页
import React from 'react';
import {Link} from 'react-router-dom';

//弹出框组件
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

const Setting = (props) => {
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    //使用useState设置state，一次设置一个state
    // const [sort,setSort] = React.useState('新数据在前');
    // const [minMag,setMinMag] = React.useState('4');
    // const [maxMag,setMaxMag] = React.useState('10');
    const [sort, setSort] = React.useState(props.orderby);
    const [minMag, setMinMag] = React.useState(props.minMag);
    const [maxMag, setMaxMag] = React.useState(props.maxMag);

    function handleChange(event) {
        //设置地震排序sort
        setSort(event.target.value);
    }

    function handleMinMagInput(event) {
        //正则表达式判断震级输入
        let reg = /^([1-9]|10)$/;
        if (reg.test(event.target.value)) {
            setMinMag(event.target.value);
        } else {
            setMinMag('');
        }
    }

    function handleMaxMagInput(event) {
        //正则表达式判断震级输入
        let reg = /^([1-9]|10)$/;
        if (reg.test(event.target.value)) {
            //设置地震排序sort
            setMaxMag(event.target.value);
        } else {
            //设置地震排序sort
            setMaxMag('');
        }
    }

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function clickBack(event) {
        //判断最小震级是否小于最大震级
        if (minMag <= maxMag && minMag !== '' && maxMag !== '') {
            //回传个性化地震参数
            props.handleSettingData(sort, minMag, maxMag);
        } else {
            event.preventDefault();
            alert('请检查震级输入')
        }
    }

    return (<div>
        <div id="title_bar">
            <Link className="clean-link-style" to="/" onClick={clickBack}>
                <span id="setting_back">返回</span>
            </Link>
            <span>设定</span>
            <span id="placehold">占位</span>
        </div>
        <ul className="list">
            <li className="setting-item" onClick={handleClickOpen}>排列方式<span>{
                        sort === 'time'
                            ? '新数据在前'
                            : '旧数据在前'
                    }</span>
            </li>
            <li className="setting-item">最小震级<input type="text" name="minmag" placeholder="请输入1-10的整数" value={minMag} onChange={handleMinMagInput}/></li>
            <li className="setting-item">最大震级<input type="text" name="maxmag" placeholder="请输入1-10的整数" value={maxMag} onChange={handleMaxMagInput}/></li>
        </ul>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
                <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup aria-label="gender" name="gender1" className={classes.group} value={sort} onChange={handleChange}>
                        <FormControlLabel value="time" control={<Radio color = "default" />} label="新数据在前"/>
                        <FormControlLabel value="time-asc" control={<Radio color = "default" />} label="旧数据在前"/>
                    </RadioGroup>
                </FormControl>
            </DialogContent>
        </Dialog>
    </div>)
}

export default Setting;
