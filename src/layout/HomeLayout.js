import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import autobind from 'class-autobind';
// constants
import timesOfDay from 'constants/timesOfDay';
// actions
import { setTimeOfDay } from 'actions/actions';
// components
import NavBar from 'components/NavBar/index.js';
//props
import Home from 'components/Home';
import Tree from 'components/Tree';
import Sun from 'components/props/Sun';

class HomeLayout extends Component {

    constructor() {
        super();
        autobind(this);
        this.forest = [];
        this.generateForest();
    }

    generateForest() {

        let forest = [];

        for (let i = 0; i < 12; i++) {
            const styles = {
                marginLeft: `${(_.random(0, 5, true)) * 10}vw`,
            };
            const tree = (<Tree key={i} mergeStyles={styles} />);
            forest.push(tree);
        }

        this.forest = forest;
    }

    toggleTimeOfDay() {
        const {
            timeOfDay,
            setTimeOfDay,
        } = this.props;

        if (timeOfDay === timesOfDay.DAY) {
            setTimeOfDay(timesOfDay.NIGHT)
        } else {
            setTimeOfDay(timesOfDay.DAY)
        }
    }

    render() {
        const { timeOfDay } = this.props;
        return (
            <div id="home-layout" className={timeOfDay}>
                <NavBar />
                <div className="sky">
                    <div className="container">
                        <Sun addClasses={[timeOfDay]} onClick={() => { this.toggleTimeOfDay(); }} />
                    </div>
                </div>
                <div className="top-of-ground">
                    <div className="container">
                        <Home />
                        {this.forest}
                    </div>
                </div>
                <div className="front-of-ground">
                    <div className="container" />
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const props = {
        timeOfDay: state.timeOfDay,
    };

    return props;
}

function mapDispatchToProps(dispatch) {
    const props = {
        setTimeOfDay: (timeOfDay) => {
            dispatch(setTimeOfDay(timeOfDay));
        }
    };

    return props;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeLayout);
