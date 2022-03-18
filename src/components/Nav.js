import React from "react";
import { useHistory } from "react-router-dom";

const Nav = ({ backIcon, setAD }) => {
  const history = useHistory();

  const backBtn = () => {
    setAD(false);
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="nav">
        <h6 className="ml-2" style={{ marginTop: "5px" }}>
          {backIcon === true && (
            <i
              onClick={(e) => backBtn()}
              className="fa fa-thin fa-arrow-left mr-2"
            ></i>
          )}
          Rahbar Book
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Nav;
