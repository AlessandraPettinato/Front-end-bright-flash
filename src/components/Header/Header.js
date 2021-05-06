import { useState, useEffect } from "react";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { MenuItems } from "./MenuItems";
import { Link, useLocation } from "react-router-dom";

import "./header.css";

export default function Header() {
	const [menuList, setMenuList] = useState(false);
	const [isHome, setIsHome] = useState(false);

	const showHide = () => setMenuList(!menuList);

	let location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
			setIsHome(true);
		}
	}, [location.pathname]);

	return (
		<nav className={isHome ? "nav-hide" : "navbar-items"}>
			<div className="navbar-logo">
				<a href="/">
					<img
						id="logo"
						src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618495596/Bright%20Flash/Bright-Flash-logo_vxoimo.png"
						alt="bright-flash-logo"
					/>
				</a>
			</div>
			<div className="menu-icon" onClick={showHide}>
				{!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose />}
			</div>
			<div className="menu-list">
				<ul className={menuList ? "nav-menu active" : "nav-menu"}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<Link
									to={item.url}
									className={item.cName}
									onClick={() => showHide(menuList)}
								>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
