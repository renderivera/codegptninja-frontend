import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App";
import { store } from "./store";

disableReactDevTools();

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
