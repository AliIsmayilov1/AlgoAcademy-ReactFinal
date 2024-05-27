import "../Css/App.css";
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";

function App() {
  return (
    <>
      <body>
        <Nav></Nav>
        <main>
          <Section1></Section1>
          <Section2></Section2>
        </main>
      </body>
    </>
  );
}

export default App;
