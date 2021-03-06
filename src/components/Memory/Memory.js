import "./Memory.css";
import Game from "./Game";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Memory({ data }) {

  const { level } = useParams(); // get the parameters from the router path
  return (
    <div className="gameContainer">
      <Game data={data} level={level} /> {/* send level as props */}
      <br />
      <div className="button-container">
        <button
          className="button-game"
          id="replay"
          type="button"
          onClick={() => window.location.reload(false)}
        >
          RESET
        </button>
        <Link to="/introgame">
          <button className="button-game2" id="go-on" type="button">
            TRY A NEW LEVEL
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Memory;
