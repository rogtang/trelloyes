import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './card'

describe('Card component', () => {
    //smoke test with props
    it('renders without crashing', () => {
        const div = document.createElement('div');
        //key prop is not necessary and can be removed
        ReactDOM.render(<Card key = {'a'} title = {'First card'} content = {'lorem ipsum'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    //snapshot test, key prop is not necessary and can be removed
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Card key = {'a'} title = {'First card'} content = {'lorem ipsum'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});