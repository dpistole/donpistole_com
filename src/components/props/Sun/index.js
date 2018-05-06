

import React from 'react';
import PropTypes from 'prop-types';
import SunSVG from 'svg/sun.svg';

const Sun = (props) => {
    const {
        addClasses,
        mergeStyles,
    } = props;

    let classNames = 'sun-container';
    addClasses.forEach((additionalClass) => {
            classNames += ` ${additionalClass}`;
        });

    return (
        <div className={classNames} style={mergeStyles} dangerouslySetInnerHTML={{ __html: SunSVG }} />
    );
}

Sun.propTypes = {
    addClasses: PropTypes.array,
    mergeStyles: PropTypes.shape({}),
};

Sun.defaultProps = {
    addClasses: [],
    mergeStyles: {},
}

export default Sun;