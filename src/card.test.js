import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './card'

describe('Card component', () => {
    //smoke test with props
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card key = {'a'} title = {'First card'} content = {'lorem ipsum'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Card key = {'a'} title = {'First card'} content = {'lorem ipsum'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});