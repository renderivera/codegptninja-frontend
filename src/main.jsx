import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import buildStore from "./store";

const store = buildStore();

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>
);
