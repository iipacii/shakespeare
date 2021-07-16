import React from "react";
import axios from "axios";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", translated: "", loading: "", usecount: 0 };
  }

  onTryAgain = () => {
    var count = this.state.usecount + 1;
    this.setState({ value: "", translated: "", loading: "", usecount: count });
  };

  onTextChange = (event) => {
    this.setState({ value: event.target.value });
  };
  onFormSubmit = (event) => {
    this.setState({ loading: "yes" });
    console.log("Loading:" + this.state.loading);
    event.preventDefault();

    const options = {
      method: "GET",
      url: "https://shakespeare.p.rapidapi.com/shakespeare.json",
      params: {
        text: this.state.value,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_WILLIAM_API_KEY,
        "x-rapidapi-host": "shakespeare.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response);
        this.setState({ translated: response.data.contents.translated });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          translated: "ERROR: /nToo many requests. Try again some other time!",
        });
      });
  };

  helperfunction() {}
  render() {
    if (!this.state.translated && !this.state.loading) {
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <textarea
              onChange={this.onTextChange}
              name="inputtext"
              value={this.state.value}
              style={{ height: "15vh", width: "90%" }}
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
        </div>
      );
    } else if (this.state.loading && !this.state.translated) {
      return (
        <>
          <div className="spinner-border"></div>
          <br />
          <span className="sr-only">Translating...</span>
        </>
      );
    } else if (this.state.usecount > 1) {
      return (
        <div>
          Sorry, but due to the restrictions on the number of requests that can
          be sent to the API the use is limited to 2.
          <p
            className="lead text-muted"
            style={{ fontSize: 16, marginTop: "10px" }}
          >
            Made by <a href="www.google.com">Pranshu Acharya</a> using the -
            <a href="https://english.api.rakuten.net/orthosie/api/shakespeare-translator">
              Shakespeare Translator API
            </a>
            -
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Translated:</h3>
          <div
            style={{
              backgroundImage: `url(./paperBack.jpg)`,
              backgroundRepeat: "repeat",
              backgroundSize: "100%",
              backgroundPosition: "center",
              fontFamily: "Mr Dafoe",
              fontSize: 30,
              marginBottom: "20px",
            }}
          >
            <div style={{ marginLeft: "25px", marginRight: "25px" }}>
              {this.state.translated}
            </div>
          </div>
          <form onSubmit={this.onTryAgain}>
            <button type="submit" className="btn btn-dark">
              Try Again!
            </button>
          </form>
          <p
            className="lead text-muted"
            style={{ fontSize: 16, marginTop: "10px" }}
          >
            Made by <a href="/">Pranshu Acharya</a> using the -
            <a href="https://english.api.rakuten.net/orthosie/api/shakespeare-translator">
              Shakespeare Translator API
            </a>
            -
          </p>
        </div>
      );
    }
  }
}

export default Input;
