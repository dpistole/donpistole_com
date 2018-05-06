import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadShot from 'components/HeadShot';
import autobind from 'class-autobind';

class WelcomePanel extends Component {

  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      isExpanded: false,
    }
  }

  handleClick() {
    const {
      isExpanded,
    } = this.state;

    this.setState({
      isExpanded: !isExpanded
    });
  }

  render() {
    const {
      children,
      message
    } = this.props;

    const {
      isExpanded,
    } = this.state;

    return <div className={`welcome-panel ${isExpanded ? 'expanded' : 'not-expanded'} `} role="button" tabIndex={0} onClick={this.handleClick}>
      {
        !isExpanded ?
          <div className="message-container">
            <div className="message">
              <p>{message}</p>
            </div>
            <div className="image">
              <HeadShot />
            </div>
          </div>
          :
          <div className="content">
            { children }
          </div>
      }
    </div>;
  }
}

WelcomePanel.propTypes = {
  isExpanded: PropTypes.bool,
  message: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ])
};

WelcomePanel.defaultProps = {
  isExpanded: false,
  message: '',
  children: [],
}

export default WelcomePanel;