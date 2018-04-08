import React, { Component } from 'react';
import { connect } from 'react-redux';

import timesOfDay from '../constants/timesOfDay';

import { setTimeOfDay } from '../actions/actions';

import WelcomePanel from 'components/WelcomePanel';

class HomeLayout extends Component {

    render() {

        const { timeOfDay, setTimeOfDay } = this.props;

        return (
            <div id="home-layout" className={timeOfDay}>
                <div className="nav">
                    <div className="container">         
                        <div className="controls">
                            { timeOfDay === timesOfDay.DAY && 
                                <button onClick={() => setTimeOfDay(timesOfDay.NIGHT)}>
                                    <i className="fa fa-sun" />
                                </button>
                            }
                            { timeOfDay === timesOfDay.NIGHT && 
                                <button onClick={() => setTimeOfDay(timesOfDay.DAY)}>
                                    <i className="fa fa-moon" />
                                </button>
                            }
                        </div>
                        <div className="hidden-mobile">
                            Don Pistole
                        </div>
                        <div className="social-links hidden-mobile">
                            <a href="https://github.com/dpistole/" target="_new">
                                <i className="fab fa-github-alt" />
                            </a>
                            <a href="https://twitter.com/DonaldPistole" target="_new">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="https://www.linkedin.com/in/donald-pistole/" target="_new">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sky">
                    <div className="container">
                        <div className="row ">
                        
                        </div>
                        <div className="row hidden-mobile">
                            <div className="column hidden-tablet">
                            </div>
                            <div className="column hidden-mobile">
                                <WelcomePanel />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-of-ground">
                    <div className="container"/>
                </div>
                <div className="front-of-ground">
                    <div className="container"/>
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