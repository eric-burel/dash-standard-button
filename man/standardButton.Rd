% Auto-generated: do not edit by hand
\name{standardButton}

\alias{standardButton}

\title{StandardButton component}

\description{
StandardButton  A button able to trigger a JavaScript function using a string "onclick", like you would do in pure HTML  Compatible with Dash callbacks using n_click prop
}

\usage{
standardButton(children=NULL, onClick=NULL, id=NULL, className=NULL, n_clicks=NULL,
n_clicks_timestamp=NULL, key=NULL, role=NULL, loading_state=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{onClick}{Character. On click callback (must be a string, as Dash components user defined props must be serializable)}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. }

\item{n_clicks}{Numeric. An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{role}{Character. The ARIA role attribute}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}
}
