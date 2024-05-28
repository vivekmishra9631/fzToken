import React from "react";

//INTERNAL IMPORT
import {useStateContext } from '../Context/index'


const index = () => {
  const {TOKEN_ICO, transferNativeToken} = useStateContext();

  const styles = {
    display:"flex",
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "100vh", 
    flexDirection: "column",
  };

  return (
    <div style={styles}>
      <h1>{TOKEN_ICO}</h1>
      <button onClick={() => transferNativeToken()}>TRANSFER</button>
    </div>
  );
};

export default index;
