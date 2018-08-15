import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
    <header>
        <nav>
            <div className="row">
                <img src="intro/res/img/main_logo.png" alt="ConnectUs Logo" className="logo"/>
                <ul className="main-nav">
                    <li><a href="#">About Us</a></li>
                    <li><a href="signup.html">Signup for free</a></li>
                </ul>
            </div>
        </nav>
        <div className="hero-text-box">
            <h1>Welcome to ConnectUs(beta)</h1>
            <a className="btn btn-full" href="signin.html">Log in</a>
            <a className="btn btn-ghost" href="index.html">I wanna explore...</a>
        </div>
    </header>

    <section className="section-features">
        <div className="row">
            <h2>One stop for all socialization</h2>
            <p className="long-copy">
                ConnectUs is aimed at bringing the world closer than ever before,
                right from the comforts of your home
            </p>        
        </div>

        <div className="row">
            <div className="col span_1_of_3 box">
                    <i className="ion-ios-flash icon-big"></i>
                    <h3>Fast and secure</h3>
                    <p>
                        ConnectUs is designed to be lightning fast, while ensuring security
                        at its peak
                    </p>
            </div>

            <div className="col span_1_of_3 box">
                <i className="ion-md-happy icon-big"></i>
                    <h3>Convenience at your fingertips</h3>
                    <p>
                        We at ConnectUs are dedicated to provide you the best user experience with
                        your convenience at the topmost priority
                    </p>
            </div>

            <div className="col span_1_of_3 box">
                <i className="ion-md-options icon-big"></i>
                    <h3>Fully customizable</h3>
                    <p>
                        Make ConnectUs feel like it's yours. Customize the way you like, after all,
                        it's all for you :)
                    </p>
            </div>
        </div>
    </section>
    <br/>
    <div className="bottom">
        <a className="btn btn-full" href="signin.html">Log in</a>
        <a className="btn btn-ghost" href="index.html">I wanna explore...</a>        
        <br/>
        <h3 className="bottom-text">Made with <i className="ion-md-heart"></i></h3>
    </div>    
</div>
    );
  }
}

export default App;
