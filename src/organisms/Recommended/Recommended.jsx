import React from "react";
import { useSelector } from "react-redux";
import { greet } from "../../helpers/dynamic_helpers";
import { isLoading } from "../../redux/features/recommendationsSlice";
import TopList from "../TopList/TopList";
import { MetroSpinner } from "react-spinners-kit";
import "./Recommended.scss";

const Recommended = () => {
  const isFetching = useSelector(isLoading);

  const greetText = greet();
  return (
    <div className="recommended__container">
      <h1>{greetText}</h1>
      {isFetching ? (
        <div className="spinner">
          <MetroSpinner size={30} color="#1DB954" loading={isFetching} />
        </div>
      ) : (
        <TopList />
      )}
    </div>
  );
};

export default Recommended;
