import {getComputation} from "./App";
import Enzyme from 'enzyme';

import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const App = require('./App.js')

describe('testComputation', () => {
  it('adds 1 + 5', () => {
    expect(getComputation(1, 5)).toBe(6);
  });
});

describe("testRender", () =>{
  it("should render hello world", () => {
    Enzyme.configure({ adapter: new Adapter() })

    const html = App.sayHello();
    const wrapper = shallow(html);
    expect(wrapper.text()).toContain("Hello World!");
  });

});
