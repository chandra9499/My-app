import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
        <Navbar title="navbar"/>

          <div className="container">
          <TextForm heading="this is text area"/>
        </div>
    </>
  );
}

export default App;
