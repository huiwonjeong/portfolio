import styled from "styled-components";
import MotionSlider from "./Components/MotionSlider";
import DragCircle from "./Components/DragCircle";
import BackgroundChange from "./Components/BackgroundChange";
import ScrollAnimation from "./Components/ScrollAnimation";
import LogoAnimation from "./Components/LogoAnimation";
import SharingBall from "./Components/SharingBall";
import LayoutBoxs from "./Components/LayoutBoxs";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100vw;
  padding: 0 30px;
  font-family: "Dancing Script", cursive;
`;
const LayoutBoxsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100vw;
  padding: 30px 30px;
  font-family: "Dancing Script", cursive;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-family: "Dancing Script", cursive;
  color: white;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 60px;
  h1 {
    border-bottom: 1px solid white;
  }
`;
function App() {
  return (
    <>
      <Title>
        <h1>Motion</h1>
      </Title>
      <Wrapper>
        <MotionSlider />
        <DragCircle />
        <BackgroundChange />
        <ScrollAnimation />
        <LogoAnimation />
        <SharingBall />
      </Wrapper>
      <LayoutBoxsWrapper>
        <LayoutBoxs />
      </LayoutBoxsWrapper>
    </>
  );
}

export default App;
