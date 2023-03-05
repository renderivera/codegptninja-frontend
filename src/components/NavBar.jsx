import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { BiCodeAlt, BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store";
import Select from "react-select";
import languages from "./languages";
import "../assets/LanguageSelect.css";

export default function NavBar() {
	const language = useSelector((state) => state.language);
	const dispatch = useDispatch();

	const handleChangeLanguage = (e) => {
		dispatch(changeLanguage(e));
	};

	return (
		<div className="navbar">
			<Logo />
			<div className="menu">
				<NavLink className="menu-item" to="/">
					<BiCodeAlt className="icon" />
					<div>write</div>
				</NavLink>
				<NavLink className="menu-item" to="explain">
					<BiSearch className="icon" />
					<div>explain</div>
				</NavLink>
				<Select
					className="language-select"
					classNamePrefix="language-select"
					aria-label="select programming language syntax highlighting"
					value={language}
					options={languages}
					onChange={handleChangeLanguage}
					isSearchable={false}
					foc
				/>
			</div>
		</div>
	);
}
