import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "./actions/images";
import { GlobalState, Item } from "./types";
import "./styles.css";

const App = () => {
  const state = useSelector((state: GlobalState) => state);
  const dispatch = useDispatch();
  console.log("state", state);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div className="App">
      <h1>Redux Saga Fetch</h1>
      {state.images.map((item: Item, index) => {
        return (
          <div key={`${item.id}_${index}`} className="image_grid">
            <img
              className="image"
              src={item.avatar}
              alt={item.first_name}
            ></img>
            <div className="name">
              {item.first_name} {item.last_name}
            </div>
          </div>
        );
      })}
      <button className="button3" onClick={() => dispatch(fetchImages())}>
        Load More
      </button>
    </div>
  );
};

export default App;
