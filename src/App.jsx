import { Col, Row } from "react-bootstrap";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Row className="d-flex">
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Body/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
