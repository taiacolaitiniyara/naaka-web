import React, { useState } from "react";
import "./login.css";
import { apiRoutes } from "../../api-services/ApiRoutes";
import { Image, SpaceHorizontal } from "../../reusables/Elements";
import { EmailInput, PasswordInput } from "../../reusables/Inputs";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginFail, showLoginFail] = useState(false);
  //console.log(`Bearer ${JSON.parse(localStorage.getItem("userInfo")).accessToken}`);
  function login(e) {
    e.preventDefault();
    fetch(apiRoutes.baseUrl + apiRoutes.login, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        RememberMe: true,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.status) {
          showLoginFail(true);
        } else {
          showLoginFail(false);
          console.log(r);
          localStorage.setItem("userInfo", JSON.stringify(r));
          window.location.href = "/";
        }
      })
      .catch((e) => {
        console.log("Error:", e);
      });
  }
  return (
    <div className="login">
      <form className="login-form" onSubmit={login}>
        <Image name={"naakaLogo.png"} />
        <SpaceHorizontal height={20} />
        Please login to continue:
        <SpaceHorizontal height={10} />
        <EmailInput placeholder={"Email"} required={true} onChange={setEmail} />
        <SpaceHorizontal height={10} />
        <PasswordInput
          placeholder={"Password"}
          required={true}
          onChange={setPassword}
        />
        <SpaceHorizontal height={20} />
        <button type="submit" className="green-btn">
          Login
        </button>
        <SpaceHorizontal height={10} />
        <div
          style={{
            backgroundColor: "red",
            color: "#fff",
            padding: "10px",
            display: loginFail === true ? "block" : "none",
          }}
        >
          Unauthorized login. Please try again.
        </div>
      </form>
    </div>
  );
}

export default Login;
