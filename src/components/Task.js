import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../App.css'

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task}= this.props;

        return(
            <div style={this.StyleCompleted()}>
                {task.title} - 
                {task.description} - 
                {task.done} - 
                {task.id}
                <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
                <button onClick={this.props.deleteTask.bind(this,task.id)}>x</button>
            </div>)
    }
}

Task.propTypes={
    task: PropTypes.object.isRequired
}

export default Task;