import React from 'react';
import renderer from 'react-test-renderer';

import ContactsList from '../src/components/ContactsList';

describe('<ContactsList />', () => {
  it('has 4 child', () => {
    const tree = renderer.create(
        <ContactsList
            contacts={[
                {
                    "id": 0,
                    "image": "AllanMunger" ,
                    "name": "Allan",
                    "secondName": "Munger",
                    "subtitle": "Writer",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper leo quis pretium vehicula. In aliquam sagittis sapien id varius. In pharetra nisi orci, non venenatis mi faucibus ac. Nullam a mollis urna. Fusce euismod in enim sit amet sagittis. Suspendisse vel nunc sed nibh convallis blandit ut at ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet mauris venenatis, tincidunt tellus vel, porta mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper leo quis pretium vehicula. In aliquam sagittis sapien id varius. In pharetra nisi orci, non venenatis mi faucibus ac. Nullam a mollis urna. Fusce euismod in enim sit amet sagittis. Suspendisse vel nunc sed nibh convallis blandit ut at ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet mauris venenatis, tincidunt tellus vel, porta mauris."
                },
                {
                    "id": 1,
                    "image": "AmandaBrady" ,
                    "name": "Amanda",
                    "secondName": "Brady",
                    "subtitle": "Writer",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper leo quis pretium vehicula. In aliquam sagittis sapien id varius. In pharetra nisi orci, non venenatis mi faucibus ac. Nullam a mollis urna. Fusce euismod in enim sit amet sagittis. Suspendisse vel nunc sed nibh convallis blandit ut at ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet mauris venenatis, tincidunt tellus vel, porta mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper leo quis pretium vehicula. In aliquam sagittis sapien id varius. In pharetra nisi orci, non venenatis mi faucibus ac. Nullam a mollis urna. Fusce euismod in enim sit amet sagittis. Suspendisse vel nunc sed nibh convallis blandit ut at ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet mauris venenatis, tincidunt tellus vel, porta mauris."
                }]
            }
        />).toJSON();

    console.log(tree.children[0].children[0].children[0].children[0])
    expect(tree.children[0].children[0].children.length).toBe(2)
    // expect(tree.children[0].children[0].children[0]).toBe(2)
  });
});