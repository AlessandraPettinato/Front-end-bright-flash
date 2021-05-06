import { withRouter } from "react-router-dom";
import "./womenInfo.css";

function WomanDetails({ routeProps, data }) {
	const foundCard = data.find(
		(card) => card.id === +routeProps.match.params.id
	);

	if (!foundCard) return null;

	return (
		<div className="woman-page">
			<div className="first-column">
				<img className="info-img" src={foundCard.image} alt="" />
			</div>

			<div className="second-column">
				<h1 className="women-name">{foundCard.name}</h1>
				<h3 className="women-title">{foundCard.title}</h3>
				<p className="women-years">{foundCard.years}</p>
				<p className="women-nationality">{foundCard.nationality}</p>
				<p className="women-contribution">{foundCard.contribution}</p>
			</div>
		</div>
	);
}

export default withRouter(WomanDetails);
