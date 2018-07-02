

import React from 'react';
import PropTypes from 'prop-types';
import TreeSVG from 'svg/tree.svg';

const Tree = (props) => {
    const {
        addClasses,
        mergeStyles,
    } = props;

    let classNames = 'tree-container';
    addClasses.forEach((additionalClass) => {
            classNames += ` ${additionalClass}`;
        });

    return (
        <div className={classNames} style={mergeStyles} dangerouslySetInnerHTML={{ __html: TreeSVG }} />
    );
}

Tree.propTypes = {
    addClasses: PropTypes.array,
    mergeStyles: PropTypes.shape({}),
};

Tree.defaultProps = {
    addClasses: [],
    mergeStyles: {},
}

export default Tree;