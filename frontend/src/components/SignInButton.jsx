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

const SignInButton = ({ setLoggedIn, setError, connectWallet }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`btn`}
      onClick={async () => {
        setLoading(true);
        setTimeout(() => {
          try {
            if (connectWallet()) {
              setLoggedIn(true);
              setError(false);
            }
          } catch (e) {
            setLoading(false);
            setError(true);
          }
        }, 1000);
      }}
    >
      {loading ? <Loading loading={loading} /> : <ButtonText />}
    </div>
  );
};

export default SignInButton;
