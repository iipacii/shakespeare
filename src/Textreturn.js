import axios from "axios";
import React from "react";

class Testreturn extends React.Component {
  state = { td: null };

  options = {
    method: "GET",
    url: "https://shakespeare.p.rapidapi.com/shakespeare.json",
    params: {
      text: "Hello, my name is Pranshu Acharya. Today you shall die!",
    },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_WILLIAM_API_KEY,
      "x-rapidapi-host": "shakespeare.p.rapidapi.com",
    },
  };

  componentDidMount() {
    axios
      .request(this.options)
      //.then(function response() {} ) is not working, used arrow function= fixed.
      .then((response) => {
        console.log(response);
        this.setState({ td: response.data.contents.translated });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return <div>Translated: {this.state.td}</div>;
  }
}

export default Testreturn;
