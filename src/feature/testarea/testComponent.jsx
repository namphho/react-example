import React, { Component } from 'react'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter, asyncDecrement, registerNewAccount} from './testActions';
import { Button } from 'semantic-ui-react'

//data hand action for this comonent
const mapStateToProps = (state) => ({
    data: state.test.data
});

const mapActionsToProps = {
    decrementCounter,
    incrementCounter,
    asyncDecrement,
    registerNewAccount,
}


class testComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter, asyncDecrement, registerNewAccount} = this.props
        return (
            <div>
                <h1>Test component</h1>
                <h3> this is answer: {data}</h3>
                <Button onClick={incrementCounter} positive content="Increment"/>
                <Button onClick={decrementCounter} positive content="Decrement"/>
                <Button onClick={asyncDecrement}  positive content="AsyncCrement"/>
                <Button onClick={registerNewAccount}  positive content="New Account"/>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapActionsToProps)(testComponent);

