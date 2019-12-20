import dash_standard_button
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_standard_button.StandardButton(
        id='button',
        className="button",
        onClick="alert('Button clicked')",
        children=["Click me"]
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('button', 'n_clicks')])
def display_output(value):
    return 'You have clicked {} times'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
