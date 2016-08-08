import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../../src/components/Foo';

describe("Testing Foo Component", function() {
  it("contains spec className = foo", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it("contains spec classeNae .foo", function() {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it("contains spec to find .foo class ", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });
});
