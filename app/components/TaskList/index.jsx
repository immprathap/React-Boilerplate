import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import TaskListItem from "components/TaskList/TaskListItem.jsx";

import taskListStyle from "assets/jss/material-dashboard-pro-react/components/taskListStyle";

class TaskList extends React.Component {
    render() {
        return (
            <ul className="task-list">
                {
                    this.props.taskList.map((prop, index) => {
                        return (
                            <li className="task-list-item" key={index}>
                                <TaskListItem taskIndex={index+1} task={prop}></TaskListItem>
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}


TaskList.propTypes = {
    classes: PropTypes.object.isRequired,
    taskList: PropTypes.array.isRequired,
};

export default withStyles(taskListStyle)(TaskList);