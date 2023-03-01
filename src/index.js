import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App";
import { store } from "./store";

disableReactDevTools();

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
