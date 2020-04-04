import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list'

describe('List component', () => {
    //smoke test with props
    it('renders without crashing', () => {
        const div = document.createElement('div');
        //key prop is not necessary and can be removed
        ReactDOM.render(<List key = {'1'}
            header = {'First list'}
            cards = {[{ id: 'l', title: 'Twelfth card', content: 'lorem ipsum'}]} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    //snapshot test, key prop is not necessary and can be removed
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<List key = {'1'}
            header = {'First list'}
            //App renders List component with allCards object
            cards = {[{ id: 'l', title: 'Twelfth card', content: 'lorem ipsum'}]} />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});