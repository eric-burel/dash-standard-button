# AUTO GENERATED FILE - DO NOT EDIT

standardButton <- function(children=NULL, id=NULL, onClick=NULL) {
    
    props <- list(children=children, id=id, onClick=onClick)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'StandardButton',
        namespace = 'dash_standard_button',
        propNames = c('children', 'id', 'onClick'),
        package = 'dashStandardButton'
        )

    structure(component, class = c('dash_component', 'list'))
}
