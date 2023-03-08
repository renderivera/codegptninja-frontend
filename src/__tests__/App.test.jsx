import { render, screen, waitFor } from "@testing-library/react";
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

const getResultEditor = () => {
	return screen
		.getByTestId("output-editor")
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

describe("App", () => {
	it("buttons should be disabled by default", () => {
		expect(getSubmitButton()).toBeDisabled();
		expect(getCopyButton()).toBeDisabled();
	});
	it("'write' editor persists input on page switch", async () => {
		const testinput = "hello world 1";

		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.type(getEditor(), testinput);
		expect(getEditor()).toHaveTextContent(testinput);
		await userEvent.click(getExplainMenuButton());
		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.click(getWriteMenuButton());
		expect(getEditor()).toHaveTextContent(testinput);
	});
	it("'explain' editor persists input on page switch", async () => {
		const testinput = "hello world 2";

		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.click(getExplainMenuButton());
		await userEvent.type(getEditor(), testinput);
		expect(getEditor()).toHaveTextContent(testinput);
		await userEvent.click(getWriteMenuButton());
		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.click(getExplainMenuButton());
		expect(getEditor()).toHaveTextContent(testinput);
		await userEvent.click(getWriteMenuButton());
	});
	it("'write' editor prompt submit returns openai result and not error", async () => {
		const testInput = "hello world";
		const loading = "loading...";

		expect(getEditor()).toBeEmptyDOMElement();
		await userEvent.type(getEditor(), testInput);
		expect(getEditor()).toHaveTextContent(testInput);
		await userEvent.click(getSubmitButton());

		expect(getResultEditor()).toHaveTextContent(loading);
		await waitFor(
			() => expect(getResultEditor()).not.toHaveTextContent(loading),
			{ timeout: 10000 }
		);
		expect(getResultEditor()).not.toHaveTextContent("Error");
	});
});
