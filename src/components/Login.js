import React, {useState} from 'react';
import users from '../users/users.json';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.users.find((user) => user.username === username && user.password === password);
    if (user) {
      // Redirect to the /admin path
      window.location.href = '/admin';
    } else {
      window.location.href = '/'; //sonradan hata mesajı ver.
    }
  };

  return (
    <>
      <div className="row">
        <div className="col p-0">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="login-box">
              <div className="login-snip">
              <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                <label htmlFor="tab-1" className="tab">Login</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-space">
                <form onSubmit={handleSubmit}>
                  <div className="login">
                    <div className="group">
                      <label htmlFor="user" className="label">Username</label>
                      <input id="user" type="text" className="input" value={username} onChange={handleUsernameChange} placeholder="Enter your username" style={{color: "#ffff"}}/>
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">Password</label>
                      <input id="pass" type="password" className="input" data-type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" style={{color: "#ffff"}}/>
                    </div>
                    <div className="group">
                      <input type="submit" className="button" value="Sign In" />
                    </div>
                    <div className="hr" ></div>
                    <div className="foot" style={{color: "#ffff"}}>
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  </form>
                  <div className="sign-up-form">
                    <div className="hr text-center" style={{color: "#ffff"}}> ŞUAN İÇİN AKTİF ÜYE KAYDI YOKTUR!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
