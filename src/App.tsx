import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MotionSlider from "./Components/MotionSlider";
import DragCircle from "./Components/DragCircle";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100vw;
`;
function App() {
  return (
    <>
      <Wrapper>
        <MotionSlider />
        <DragCircle />
      </Wrapper>
    </>
  );
}

export default App;
