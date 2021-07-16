import Input from "./Input";

const Jumbotron = () => {
  return (
    <section className="text-center container">
      <div className="row " style={{ paddingTop: "10px" }}>
        <div className="col-lg-6 col-md-8 mx-auto">
          <img
            src="./william.png"
            alt="Shakespeare"
            width="350"
            height="350"
            className="rounded-circle"
          />
          <h1 className="fw-light" style={{ fontFamily: "Dancing Script" }}>
            Shakepeare Translator!
          </h1>
          <p
            className="lead text-muted"
            style={{ backdropFilter: "blur(10px)" }}
          >
            Translate plain english text to something William Shakespeare would
            write.
          </p>
          <Input />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
