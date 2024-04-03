import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import routerURI from "../../routerApi/routerApi";

const Home = () => {
  return (
    <>
      <h1>Welcome to React 30 day Challenge</h1>
      <ul className={classes.cardListItems}>
        {routerURI.map((item) => (
          <li key={item.id}>
            <div className={classes.cardListItem}>
              <p>Day {item.id}</p>
              <h2>{item.name}</h2>
              <Link to={`./${item.url}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
