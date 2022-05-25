import React, { Component } from 'react';

class ToDoLostItem extends Component {
    render() {
        const {lable} = this.props;
        return (
            <span>{lable}</span>
        );
    }
}

export default ToDoLostItem;