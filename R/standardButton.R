# AUTO GENERATED FILE - DO NOT EDIT

standardButton <- function(children=NULL, onClick=NULL, id=NULL, className=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, key=NULL, role=NULL, loading_state=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('data'), ...))

    props <- list(children=children, onClick=onClick, id=id, className=className, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp, key=key, role=role, loading_state=loading_state, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'StandardButton',
        namespace = 'dash_standard_button',
        propNames = c('children', 'onClick', 'id', 'className', 'n_clicks', 'n_clicks_timestamp', 'key', 'role', 'loading_state', wildcard_names),
        package = 'dashStandardButton'
        )

    structure(component, class = c('dash_component', 'list'))
}
