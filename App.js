import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="outside" class="grid-container">
      <div className="left" class="grid-item">
        <img src="./logo.svg" className="web-logo" alt="logo"/>
        <h3 className="register">REGISTER</h3>
        <div className="com">
          <div className="com-chil">
            <p><img src="./email.svg"/> Company Name</p>
          </div>
          <div className="com-chil">
            <p><img src="./address.svg"/>Company Address</p>
          </div>
        </div>
        <h4>Owner</h4>
        <div className="com">
          <div className="com-chil">
            <p><img src="./email.svg"/> Email</p>
          </div>
          <div className="com-chil">
            <p><img src="./email.svg"/> First Name</p>
          </div>
          <div className="com-chil">
            <p><img src="./person.svg"/> Last Name</p>
          </div>
          <div className="com-chil">
            <p><img src="./phone.svg"/> Phone Number</p>
          </div>
          <div className="com-chil">
            <p><img src="./lock.svg"/> Password</p>
          </div>
          <div className="com-chil">
            <p><img src="./lock.svg"/> Confirm Password</p>
          </div>
        </div>
        <div className="button">
          <button className="button-reg">REGISTER</button>
        </div>
        <div className="login-now">
          <p>I have an account. Login Now.</p>
        </div>
      </div>
      <div className="right" class="grid-item">
        <img src="./tracking.svg"/>
      </div>
    </div>
  );
}

export default App;
