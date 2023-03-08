import React from "react";
import { createRoot } from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App";
import buildStore from "./store";

disableReactDevTools();
const store = buildStore();

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>
);
