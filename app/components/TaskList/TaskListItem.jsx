import React from "react";
import PropTypes from "prop-types";

// icons
import { Search as SearchIcon, VisibilityOff as VisibilityOffIcon, Warning as WarningIcon, Done as DoneIcon } from "material-ui-icons";
// import { Search as SearchIcon, VisibilityOff as VisibilityOffIcon, Warning as WarningIcon, Refresh as RefreshIcon, Done as DoneIcon } from "material-ui-icons";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import Button from "components/CustomButtons/Button.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

import taskListItemStyle from "assets/jss/material-dashboard-pro-react/components/taskListItemStyle";

class TaskListItem extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Card /* className={classes.card}*/>
                <CardHeader
                    classes={{ root: classes.cardHeader, title: classes.cardTitle, subheader: classes.cardSubheader }}
                    avatar={
                        <Avatar classes={{ root: classes.cardAvatar }}>
                            {this.props.taskIndex}
                        </Avatar>
                    }
                    title={(<Tooltip title={this.props.task.name} aria-label={this.props.task.name}>
                        <span>{this.props.task.name}</span>
                    </Tooltip>)}
                    titleTypographyProps={{ noWrap: true }}
                //subheader="Sep 2016"
                />
                <CardContent classes={{ root: classes.cardContent }}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={classes.taskInfoHead}>
                                    <Typography variant="caption">
                                        Started on:
                                </Typography>
                                </td>
                                <td className={classes.taskInfo}>
                                    <Typography variant="caption">
                                        {this.props.task.started}
                                    </Typography>
                                </td>
                            </tr>
                            {this.props.task.status !== 0 ? (<tr>
                                <td className={classes.taskInfoHead}>
                                    <Typography variant="caption">
                                        Ended on:
                                </Typography>
                                </td>
                                <td className={classes.taskInfo}>
                                    <Typography variant="caption">
                                        {this.props.task.ended}
                                    </Typography>
                                </td>
                            </tr>) : null}
                            <tr>
                                <td className={classes.taskInfoHead}>
                                    <Typography variant="caption">
                                        Schedule:
                                </Typography>
                                </td>
                                <td className={classes.taskInfo}>
                                    <Typography variant="caption">
                                        {this.props.task.schedule === 0 ? "Once" : this.props.task.schedule === 1 ? "Daily" : "Every Sunday"}
                                    </Typography>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item xs={11}>
                            <CustomLinearProgress
                                variant="determinate"
                                color={this.props.task.status === 0 ? "primary" : this.props.task.status === 2 ? "success" : "danger"}
                                value={this.props.task.progress}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title={this.props.task.message}>
                                <Avatar classes={
                                    this.props.task.status === 0 ? { root: classes.cardStatusAvatarRunning }
                                        : this.props.task.status === 2 ? { root: classes.cardStatusAvatarSuccess }
                                            : { root: classes.cardStatusAvatarError }}
                                >
                                    {this.props.task.status === 0 ? (
                                        // <RefreshIcon classes={{ root: classes.cardStatusAvatarIcon }} />
                                        <CircularProgress classes={{ root: classes.cardStatusAvatarIcon }} />
                                    ) : this.props.task.status === 2 ? (
                                        <DoneIcon classes={{ root: classes.cardStatusAvatarIcon }} />
                                    ) : (
                                                <WarningIcon classes={{ root: classes.cardStatusAvatarIcon }} />
                                            )
                                    }
                                </Avatar>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions classes={{ root: classes.cardAction }}>
                    <Tooltip title="Explore" aria-label="explore">
                        <Button round justIcon color="simple" customClass={classes.button}>
                            <SearchIcon classes={{ root: classes.buttonIcon }} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Hide" aria-label="hide">
                        <Button round justIcon color="simple" customClass={classes.button}>
                            <VisibilityOffIcon classes={{ root: classes.buttonIcon }} />
                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        )
    }
}


TaskListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    taskIndex: PropTypes.number,
    onClear: PropTypes.func,
    onExamine: PropTypes.func,
};

export default withStyles(taskListItemStyle)(TaskListItem);