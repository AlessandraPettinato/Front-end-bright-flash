import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import FooterQuote from "./FooterQuote";
import "./Footer.css";

export default function Footer({ info }) {
	const [allInfo, setAllInfo] = useState({});
	const [isHome, setIsHome] = useState(false);

	const randomInfo = useCallback(() => {
		if (info !== undefined && info.length > 0) {
			const foundInfo = info[Math.floor(Math.random() * info.length)];
			setAllInfo(foundInfo);
		} else {
			setAllInfo({});
		}
	}, [info]);

	let location = useLocation();

	useEffect(() => {
		randomInfo();
		if (location.pathname === "/") {
			setIsHome(true);
		}
	}, [randomInfo, location.pathname]);

	return (
		<div className="footerpage-container">
			<footer className={isHome ? "footer-hide" : "footer-wrapper"}>
				<div className="quote">
					<FooterQuote quote={allInfo.quote} name={allInfo.name} />
				</div>
				<div className="icon-container">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/brightflash.bf/"
					>
						<img
							className="icon"
							src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
							alt="instagram icon"
						/>
					</a>
					<Link to="/contact">
						<img
							className="icon"
							src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
							alt="contact icon"
						/>
					</Link>
					<div className="icon">
						<Link to="/about">
							<h2>ABOUT US</h2>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
