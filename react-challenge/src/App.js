import { useEffect, useReducer } from "react";
import axios from "axios";
import Card from "./Dashboard/Card";
import { Container } from "./Dashboard/Container.styles";
import { INITIAL_STATE, reducer } from "./Dashboard/store/reducer";
import { ACTION_TYPES } from "./Dashboard/store/action.types";
import Loader from "./Dashboard/Loader";
import Error from "./Dashboard/Error";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { error, post, fetching } = state;

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    const controller = new AbortController();
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json", {
        signal: controller.signal,
      })
      .then((r) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: r.data });
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
        } else {
          dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h4 className="center-align">Superhero App</h4>
      <Container>
        {!fetching ? (
          post.slice(0, 12).map((hero) => <Card key={hero.id} values={hero} />)
        ) : (
          <Loader />
        )}
        {error && <Error />}
      </Container>
    </div>
  );
}

export default App;
