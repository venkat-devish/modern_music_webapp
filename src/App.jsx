import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { greet } from "./helpers/greet";
import { fetchSongsRecommendations } from "./redux/reducers/recommendationsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsRecommendations());
  }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
