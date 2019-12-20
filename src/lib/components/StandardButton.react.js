import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class StandardButton extends Component {
    constructor() {
        super()
        this.buttonRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.buttonRef.current)
        this.buttonRef.current.setAttribute("onclick", this.props.onClick)
    }

    render() {
        const { onClick, setProps, loading_state, children, ...otherProps } = this.props
        return (
            <button ref={this.buttonRef} {...otherProps} >{children}</button>
        );
    }
}

StandardButton.defaultProps = {};

StandardButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * On click callback (must be a string, as Dash components user defined props must be serializable)
     */
    onClick: PropTypes.string,

};
