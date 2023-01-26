import React from "react";
import { useSelector } from "react-redux";
import { greet } from "../../helpers/greet";
import { isLoading } from "../../redux/reducers/recommendationsSlice";
import TopList from "../TopList/TopList";
import "./Recommended.scss";

const Recommended = () => {
  const isFetching = useSelector(isLoading);
  console.log(isFetching);
  const greetText = greet();
  return (
    <div className="recommended__container">
      <h1>{greetText}</h1>
      {isFetching ? <p>Loading..</p> : <TopList />}
    </div>
  );
};

export default Recommended;
