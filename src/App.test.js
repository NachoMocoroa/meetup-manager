/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
//const setup = () => shallow(<App />);
const setupProvider = (ui) => shallow(<Provider store={store}>{ui}</Provider>);
//const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test]='${val}'`);

test("renders App without crashing", () => {
  const wrapper = setupProvider(<App />);
  expect(wrapper.exists()).toBe(true);
});

test("renders the navigation component", () => {
  const wrapper = setupProvider(<App><MainNavigation /></App>);
  expect(wrapper.find(MainNavigation).length).toBe(1);
});

test("renders the Layout component", () => {
  const wrapper = setupProvider(<App><Layout /></App>);
  expect(wrapper.find(Layout).length).toBe(1);
});
