import React from 'react';
import renderer from 'react-test-renderer';

import ContactSheet from './../src/ContactSheet';

describe('<ContactSheet />', () => {
  it('has 4 child', () => {
    const tree = renderer.create(
        <ContactSheet
            name='Name'
            secondName='secondName'
            subtitle='subtitle'
            bio='bio'
        />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});