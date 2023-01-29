import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { greet } from "./helpers/dynamic_helpers";
import { fetchGlobalHits } from "./redux/features/globalHitsSlice";
import { fetchSongsRecommendations } from "./redux/features/recommendationsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsRecommendations());
    dispatch(fetchGlobalHits());
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
