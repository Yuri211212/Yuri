import React from 'react';
import { connect } from 'react-redux';

import { actionCreateTodo, actionDeleteTodo, getTodosThunk } from '../store/todos';

import { Profile } from '../components/Profile';

class ProfileContainer extends React.Component {
    constructor() {
        super()
    };

    state = {
        localState: ''
    };

    changeInput = (event) => {
        this.setState({ localState: event.target.value })
    };

    addToMyList = () => {
        const data = {
            title: this.state.localState,
            id: Date.now()
        }
        this.props.addToMyList(data)
    };

    deleteFromMyList = (idFromRemoved) => {
        this.props.deleteFromMyList(idFromRemoved)
    };

    componentDidMount() {
        this.props.getTodosThunk()
    };

    render() {
        return <Profile
            localState={this.state.localState}
            myList={this.props.myList}
            addToMyList={this.addToMyList}
            changeInput={this.changeInput}
            deleteFromMyList={this.deleteFromMyList} />
    }
};

const mapStateToProps = (state) => {
    return { myList: state.taska }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToMyList: (data) => dispatch(actionCreateTodo(data)),
        deleteFromMyList: (data) => dispatch(actionDeleteTodo(data)),
        getTodosThunk: () => dispatch(getTodosThunk())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)