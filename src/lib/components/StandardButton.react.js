import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * StandardButton
 * 
 * A button able to trigger a JavaScript function using a string "onclick",
 * like you would do in pure HTML
 * 
 * Compatible with Dash callbacks using n_click prop
 */
export default class StandardButton extends Component {
    constructor() {
        super()
        this.buttonRef = React.createRef();
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount() {
        // pass user defined onclick
        this.buttonRef.current.setAttribute("onclick", this.props.onClick)
        // also add usual Plotly callback
        this.buttonRef.current.addEventListener("click", this.onClick)
        this.buttonRef.current.addEventListener("hover", this.onClick)
    }
    // @see https://github.com/plotly/dash-html-components/blob/dev/scripts/generate-components.js#L219
    onClick() {
        this.props.setProps({
            n_clicks: this.props.n_clicks + 1,
            n_clicks_timestamp: Date.now()
        })
    }

    render() {
        const {
            // ignored props
            onClick, setProps, loading_state, n_clicks, n_clicks_timestamp, children,
            // props to  pass down
            ...otherProps
        } = this.props
        return (
            <button ref={this.buttonRef} {...otherProps} >{children}</button>
        );
    }
}

StandardButton.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

StandardButton.propTypes = {

    /**
     * On click callback (must be a string, as Dash components user defined props must be serializable)
     */
    onClick: PropTypes.string,
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


    'className': PropTypes.string,

    // @see https://github.com/plotly/dash-html-components/blob/dev/scripts/generate-components.js#L219
    /**
 * An integer that represents the number of times
 * that this element has been clicked on.
 */
    'n_clicks': PropTypes.number,
    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    'n_clicks_timestamp': PropTypes.number,
    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
    * The ARIA role attribute
    */
    'role': PropTypes.string,
    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    'loading_state': PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

};
