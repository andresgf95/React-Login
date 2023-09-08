import { useState } from "react";
import logo from "./logo.svg";
import "./Login.css";

const LevelsSecurity = ["weak", "medium", "strong"];

export function Login() {
  const [Secure, setSecure] = useState("");

  const getLevels = (password) => {
    console.log(password);

    let securutyIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        securutyIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        securutyIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        securutyIndicator++;
      }
    }

    setSecure(LevelsSecurity[securutyIndicator] || "");
  };

  const handleChange = (e) => {
    getLevels(e.target.value);
  };

  return (
    <div className="login-card">
      <img src={logo} alt="Logo" />
      <form className="login-form">
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <div className={`bars ${Secure}`}>
          <div></div>
        </div>
        <div className="strength">{Secure && <>{Secure} password</>}</div>
        <button className="control" type="button" >
          LOGIN
        </button>
      </form>
    </div>
  );
}