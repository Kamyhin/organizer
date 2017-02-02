import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getNewID } from '../../utils'
import NavBars from '../../components/NavBars'
import { addEvent, clearEventsList, readAll, isOpen } from '../../actions'
import Content from './../../components/Content';

import './App.css';

class App extends Component {

    componentDidMount(){
        this.timer = setInterval(this.addEvent.bind(this), 10000);
    };

    componentWillUpdate() {
        let size = this.props.events.size;
        if (size === 50) {
            this.props.clearEventsList();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    addEvent() {
        let id = getNewID(this.props.events);
        let title = 'Test test test ' + id;
        this.props.addEvent(id, title)
    }

    render() {
        return (
            <div id='app' className='pt-dark'>
                <NavBars {...this.props}/>
                <Content {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        addEvent : (id, title) => dispatch(addEvent(id, title)),
        clearEventsList: () => dispatch(clearEventsList()),
        readAll: () => dispatch(readAll()),
        popoverOpen: () => dispatch(isOpen())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
