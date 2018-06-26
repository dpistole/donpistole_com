import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import autobind from 'class-autobind';

import timesOfDay from '../constants/timesOfDay';

import { setTimeOfDay } from '../actions/actions';

import WelcomePanel from 'components/WelcomePanel';
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

        const { timeOfDay, setTimeOfDay } = this.props;

        return (
            <div id="home-layout" className={timeOfDay}>
                <div className="nav">
                    <div className="container">
                        <div className="controls">
                            {timeOfDay === timesOfDay.DAY &&
                                <button onClick={() => setTimeOfDay(timesOfDay.NIGHT)} title="Sweet Dreams">
                                    <i className="fa fa-moon" />
                                </button>
                            }
                            {timeOfDay === timesOfDay.NIGHT &&
                                <button onClick={() => setTimeOfDay(timesOfDay.DAY)} title="Wakey Wakey">
                                    <i className="fa fa-sun" />
                                </button>
                            }
                        </div>
                        <div className="hidden-mobile">
                            Don Pistole
                        </div>
                        <div className="nav-links hidden-mobile">
                            <a href="./resume.pdf" title="My Resume" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-briefcase" />
                            </a>
                            <a href="https://github.com/dpistole/" title="My Github" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-alt" />
                            </a>
                            <a href="https://www.linkedin.com/in/donald-pistole/" title="My LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sky">
                    <div className="container">
                        <Sun addClasses={[timeOfDay]} onClick={() => { this.toggleTimeOfDay(); }} />
                        <WelcomePanel message="Hello World">
                            <div className="home-welcome-panel">
                                <div className="intro">
                                    <p>
                                        This is my home page.
                  </p>
                                </div>
                            </div>
                        </WelcomePanel>
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