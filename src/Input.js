import React from "react";
import TranslatedDisplay from "./TranslatedDisplay";

class Input extends React.Component {
  state = { input: "i" };

  handleSubmit() {
    this.setState({ input: "translated" });
  }

  render() {
    return (
      <p>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="inputtext"
            style={{ height: "20vh", width: "90%" }}
            autoFocus
            placeholder="Enter a sentence"
            required
          ></textarea>
          <br />
          {/* <a href="/" className="btn btn-dark my-2" style={{ margin: "4px" }}>
            Translate!
          </a> */}

          <button type="submit" className="btn btn-dark">
            Translate!
          </button>
        </form>
        <TranslatedDisplay text={this.state.input} />
      </p>
    );
  }
}

export default Input;
