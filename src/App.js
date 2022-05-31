import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      mode: true
    };
  }
  changeColor = () => {
    this.state.mode ? this.simpleColors() : this.hexColors();
  };
  handleSimple = () => {
    this.setState({ mode: !this.state.mode });
  };
  handleHex = () => {
    this.setState({ mode: !this.state.mode });
  };
  simpleColors = () => {
    let colors = [
      "Red",
      "Green",
      "Blue",
      "Orange",
      "Yellow",
      "Gold",
      "Black",
      "Purple",
      "White",
      "Skyblue",
      "Maroon",
      "Lime",
      "Aqua"
    ];

    this.setState({
      color: colors[Math.ceil(Math.random() * colors.length)]
    });
  };
  hexColors = () => {
    let hexColor = "#" + Math.floor(Math.random() * 16777220).toString(16);
    this.setState({ color: hexColor });
  };

  render() {
    return (
      <div className="App">
        <header>
          <a href="#" class="name">
            Color Flipper
          </a>
          <div>
            <a id="simple" class="active" onClick={this.handleSimple}>
              Simple{" "}
            </a>
            <a id="hex" onClick={this.handleHex}>
              Hex
            </a>
          </div>
        </header>
        <main style={{ backgroundColor: this.state.color }}>
          <p>
            Background color: <span>{this.state.color}</span>{" "}
            <button onClick={this.changeColor}>Change Color</button>
          </p>
        </main>
      </div>
    );
  }
}
export default App;
