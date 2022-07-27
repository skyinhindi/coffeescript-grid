import React, { useState } from "react";
import MM from "../assets/mm.png";
import Loading from "./Loading";

const ButtonText = () => {
  return (
    <div className="row">
      <img src={MM} alt="" className="mm" />
      <p className="btn-text">Sign in with Metamask</p>
    </div>
  );
};

const SignInButton = ({ setError, login }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (window.ethereum.isConnected() && window.ethereum.isMetaMask) {
          await login();
          setError(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  };

  return (
    <div className={`btn`} onClick={handleClick}>
      {loading ? <Loading loading={loading} /> : <ButtonText />}
    </div>
  );
};

export default SignInButton;
