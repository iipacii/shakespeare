import Jumbotron from "./Jumbotron";
import HeaderBar from "./HeaderBar";

function App() {
  return (
    <div
    // style={{
    //   backgroundImage: `url(./Background.gif)`,
    //   backgroundRepeat: "repeat",
    //   backgroundSize: "100%",
    //   backgroundPosition: "center",
    // }}
    >
      <HeaderBar />
      <Jumbotron />
    </div>
  );
}

export default App;
