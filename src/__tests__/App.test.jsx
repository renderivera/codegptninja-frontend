import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import buildStore from "../store";

beforeEach(() => {
	const store = buildStore();
	render(<App store={store} />);
});

const getEditor = () => {
	return screen
		.getByTestId("input-editor")
		.getElementsByClassName("npm__react-simple-code-editor__textarea")[0];
};

const getWriteMenuButton = () => {
	return screen.getByTestId("write-menu-button");
};
const getExplainMenuButton = () => {
	return screen.getByTestId("explain-menu-button");
};
const getSubmitButton = () => {
	return screen.getByTestId("submit-button");
};
const getCopyButton = () => {
	return screen.getByTestId("copy-button");
};

const testinput1 = "test input 1";
const testinput2 = "test input 2";

describe("App", () => {
	it("buttons should be disabled by default", () => {
		expect(getSubmitButton()).toBeDisabled();
		expect(getCopyButton()).toBeDisabled();
	});
	it("'write' editor persists input on page switch", async () => {
		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.type(getEditor(), testinput1);
		expect(getEditor()).toHaveTextContent(testinput1);
		await userEvent.click(getExplainMenuButton());
		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.click(getWriteMenuButton());
		expect(getEditor()).toHaveTextContent(testinput1);
	});
	it("'explain' editor persists input on page switch", async () => {
		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.click(getExplainMenuButton());
		await userEvent.type(getEditor(), testinput2);
		expect(getEditor()).toHaveTextContent(testinput2);
		await userEvent.click(getWriteMenuButton());
		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.click(getExplainMenuButton());
		expect(getEditor()).toHaveTextContent(testinput2);
	});
});
