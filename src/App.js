import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {Parallax} from 'react-materialize'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Parallax
            image={<img alt="" src="https://github.com/willsims14/website/blob/main/public/dolomites.png?raw=true"/>}
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
                        <a href="https://www.linkedin.com/in/will-sims/" className="fa fa-linkedin"></a>
                        <a href="https://github.com/willsims14" className="fa fa-github"></a>
                    </div>
                </div>
            </div>
        </div>
        <Parallax
            image={<img className="responsive-img" alt="" src="https://github.com/willsims14/website/blob/main/public/panorama.png?raw=true"/>}
            options={{
            responsiveThreshold: 0
            }}/>
        </div>
      </header>
    </div>
  );
}

export default App;