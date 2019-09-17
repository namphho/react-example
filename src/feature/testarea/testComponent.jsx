import React, { Component } from 'react'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from './testActions';
import { Button } from 'semantic-ui-react'

//data hand action for this comonent
const mapStateToProps = (state) => ({
    data: state.test.data
});

const mapActionsToProps = {
    decrementCounter,
    incrementCounter
}


class testComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props
        return (
            <div>
                <h1>Test component</h1>
                <h3> this is answer: {data}</h3>
                <Button onClick={incrementCounter} positive content="Increment"/>
                <Button onClick={decrementCounter} positive content="Decrement"/>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapActionsToProps)(testComponent);

