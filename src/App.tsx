import styled from "styled-components";
import MotionSlider from "./Components/MotionSlider";
import DragCircle from "./Components/DragCircle";
import BackgroundChange from "./Components/BackgroundChange";
import ScrollDetector from "./Components/ScrollDetector";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100vw;
  padding: 0 30px;
`;
function App() {
  return (
    <>
      <Wrapper>
        <MotionSlider />
        <DragCircle />
        <BackgroundChange />
        <ScrollDetector />
      </Wrapper>
    </>
  );
}

export default App;
