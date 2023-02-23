import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WriteCodePage from "./pages/WriteCodePage";

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<NavLink to="/">Home</NavLink>
				<br />
				<NavLink to="writecode">code</NavLink>
			</div>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="writecode" element={<WriteCodePage />} />
			</Routes>
		</BrowserRouter>
	);
}
