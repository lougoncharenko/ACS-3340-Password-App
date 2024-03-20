import { useState } from 'react'


function Password() {
  const [password, setPassword] = useState('p@$$w0rd')
  function generatePassword() {
    let length = 8;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  const handleClick = () => {
      const password = generatePassword()
      setPassword(password)
  }

  return (
  <div>
    <div>{password}</div>
    <div>
      <button onClick={(e) => {
        handleClick()
      }}>Generate</button>
    </div>
  </div>
  )
}

export default Password