import Slidebar from "./components/Slidebar";
import { DashBoard } from "./components/DashBoard";
import './style/style.css'


import styled from "styled-components";
const Div = styled.div`
  position: relative;
`;

function App() {
  return (
    <Div>
      <Slidebar />
      <DashBoard />
    </Div>
  );
}

export default App;
