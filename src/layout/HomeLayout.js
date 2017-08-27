import React, { Component } from 'react';
import { connect } from 'react-redux';

import timesOfDay from '../constants/timesOfDay';

import { setTimeOfDay } from '../actions/actions';

class HomeLayout extends Component {

    render() {

        const { timeOfDay, setTimeOfDay } = this.props;

        return (
            <div id="home-layout" className={timeOfDay}>
                <div className="nav">
                    <div className="controls">
                        { timeOfDay === timesOfDay.DAY && 
                            <button onClick={() => setTimeOfDay(timesOfDay.NIGHT)}>
                                <i className="fa fa-sun-o" />
                            </button>
                        }
                        { timeOfDay === timesOfDay.NIGHT && 
                            <button onClick={() => setTimeOfDay(timesOfDay.DAY)}>
                                <i className="fa fa-moon-o" />
                            </button>
                        }
                    </div>
                    <div>
                        Don Pistole
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/dpistole/" target="_new">
                            <i className="fa fa-github" />
                        </a>
                        <a href="https://twitter.com/DonaldPistole" target="_new">
                            <i className="fa fa-twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/donald-pistole/" target="_new">
                            <i className="fa fa-linkedin" />
                        </a>
                    </div>
                </div>
                <div className="sky">
                </div>
                <div className="top-of-ground">
                </div>
                <div className="front-of-ground">
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