import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {Parallax} from 'react-materialize'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Parallax
            image={<img alt="" src="dolomites.png"/>}
            options={{
            responsiveThreshold: 5
            }}
        />
        <div className="section">
            <div className="row container">
                <div className="col s6">
                    <h2 className="header">Will Sims</h2>
                    <p className="grey-text text-darken-3 lighten-3">I like to build things and explore.</p>
                </div>
                <div id='social-media' className="col s6">
                    <div className="valign-wrapper">
                        <a className="circle" href="https://www.linkedin.com/in/will-sims/" class="fa fa-linkedin"></a>
                        <a href="https://github.com/willsims14" class="fa fa-github"></a>
                    </div>
                </div>
            </div>
        </div>
        <Parallax
            image={<img className="responsive-img" alt="" src="panorama.png"/>}
            options={{
            responsiveThreshold: 0
            }}/>
        </div>
      </header>
    </div>
  );
}

export default App;