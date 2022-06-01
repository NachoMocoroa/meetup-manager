/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import FormInput from "./FormInput";

test("<FormInput/> renders without crashing", () => {
  const wrapper = shallow(<FormInput />);
  expect(wrapper.exists()).toBe(true);
});

test("<FormInput/> renders the label element", () => {
  const wrapper = shallow(<FormInput />);
  expect(wrapper.find("label").length).toBe(1);
});

test("<FormInput/> renders the input element", () => {
  const wrapper = shallow(<FormInput />);
  expect(wrapper.find("input").length).toBe(1);
});

test("<FormInput/> renders the textarea element", () => {
  const wrapper = shallow(<FormInput element="textarea" />);
  expect(wrapper.find("textarea").length).toBe(1);
});

test("<FormInput/> renders the labelText property text", () => {
  const wrapper = shallow(<FormInput labelText="Texto" />);
  expect(wrapper.find("label").text()).toBe("Texto");
});

test("<FormInput/> renders value from property", () => {
  const testState = { value: 10 };
  const wrapper = shallow((
    <FormInput 
      value={testState.value}
      onChange={(e) => {
        testState[e.target.name] = e.target.value;
      }}
    />
  ));
  expect(wrapper.find('input').at(0).prop('value')).toEqual(10);
});
