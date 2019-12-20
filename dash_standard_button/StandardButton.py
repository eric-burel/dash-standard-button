# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class StandardButton(Component):
    """A StandardButton component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID used to identify this component in Dash callbacks.
- onClick (string; optional): On click callback (must be a string, as Dash components user defined props must be serializable)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, onClick=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'onClick']
        self._type = 'StandardButton'
        self._namespace = 'dash_standard_button'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'onClick']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(StandardButton, self).__init__(children=children, **args)
