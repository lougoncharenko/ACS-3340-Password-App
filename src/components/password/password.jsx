import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addPassword} from "../../redux/slices/passwordSlice";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

function Password() {
  const [password, setPassword] = useState("p@$$w0rd");
  const [name, setName] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeHyphens, setIncludeHyphens] = useState(false);
  const [passwordType, setPasswordType] = useState("letters");
  const dispatch = useDispatch();

  function generatePassword() {
    let charset = "";
    switch (passwordType) {
      case "letters":
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "lettersNumbers":
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        break;
      case "lettersNumbersPunctuation":
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
        break;
      default:
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
      if (includeHyphens && (i + 1) % 3 === 0 && i !== passwordLength - 1) {
        password += "-";
      }
    }
    return password;
  }

  const handleGenerateClick = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2>Password Generator</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          readOnly
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          placeholder="Name/Description"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Password Length:</label>
        <input
          type="number"
          style={{ width: "60px", padding: "8px", fontSize: "16px" }}
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Include Hyphens:</label>
        <input
          type="checkbox"
          checked={includeHyphens}
          onChange={(e) => setIncludeHyphens(e.target.checked)}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Password Type:</label>
        <select
          value={passwordType}
          onChange={(e) => setPasswordType(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        >
          <option value="letters">Letters</option>
          <option value="lettersNumbers">Letters + Numbers</option>
          <option value="lettersNumbersPunctuation">
            Letters + Numbers + Punctuation
          </option>
        </select>
      </div>
      <PasswordStrengthIndicator password={password} /> 
      <div>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleGenerateClick}
        >
          Generate
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(addPassword({ name, password }))}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Password;
