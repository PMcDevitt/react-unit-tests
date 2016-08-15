var React = require('react')
var ReactDOM = require('react-dom')

module.exports = React.createClass({
  displayName: 'NewFoo',

  getInitialState: function() {
    return { done: this.props.done }
  },

  componentDidMount: function() {
    this.setDone(this.refs.done.defaultChecked);
    },

  render: function() {
    return (
      <label>
        <input ref="done" type="checkbox" defaultChecked={this.state.done} onChange={this.onChange} />
        {this.props.name}
      </label>
    );
  },

  onChange: function(event) {
    this.setDone(event.target.checked);
  },

  setDone: function(done) {
    this.setState({ done: !!done});
  }
});
