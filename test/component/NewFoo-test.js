var React = require('react/addons'),
		ReactDOM = require('react-dom'),
    assert = require('assert'),
    NewFoo = require('../../src/components/NewFoo'),
    TestUtils = React.addons.TestUtils;

describe('Testing NewFoo Component', function(){
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <NewFoo done={false} name="Unit testing components"/>
    );
    // Searching for <input> tag within rendered React component
    // Throws an exception if not found
    this.inputElement = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'input'
    );
    // this.inputElement = ReactDOM.findDOMNode(inputComponent);
  });

  it('<input> should be of type "checkbox"', function() {
    assert(this.inputElement.getAttribute('type') === 'checkbox');
  });

  it('<input> should not be checked', function() {
    assert(this.inputElement.checked === false);
  });
});
