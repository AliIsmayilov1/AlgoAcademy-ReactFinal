import "../Css/App.css";
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

function App() {
  return (
    <>
      <body>
        <Nav></Nav>
        <main>
          <Section1></Section1>
          <Section2></Section2>
          <Section3></Section3>
          <Section4></Section4>
        </main>
      </body>
    </>
  );
}

export default App;
