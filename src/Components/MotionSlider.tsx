import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const MotionWrapper = styled(motion.div)`
  position: relative;
  height: 400px;
  border: 4px solid white;
  border-radius: 20px;
  width: 100%;
  margin: 20px 0;
`;
const TitleWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: white;
  font-family: "Dancing Script", cursive;
  font-weight: 600;
`;
const LeftBtn = styled(motion.div)`
  width: 60px;
  height: 200px;
  background-color: transparent;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 100px;
  left: 10%;
`;
const RightBtn = styled(motion.div)`
  width: 60px;
  height: 200px;
  top: 100px;
  right: 10%;
  background-color: transparent;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Leftsvg = styled(motion.svg)`
  width: 100px;
  height: 100px;
  top: 60px;
  left: 1px;
`;

const Rightsvg = styled(Leftsvg)``;

const Box = styled(motion.div)`
  width: 50%;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: "Dancing Script", cursive;
  position: absolute;
  top: 100px;
  left: 25%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;
const Text = styled.h1`
  font-size: 280px;
  color: #4a69bd;
`;
const boxVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};

function MotionSlider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const next = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prev = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <>
      <MotionWrapper>
        <AnimatePresence
          //exitBeforeEnter
          custom={back}
        >
          <LeftBtn onClick={prev}>
            <Leftsvg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              key="leftbtn"
            >
              <motion.path
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
                fill="rgba(256,256,256,0.4)"
              ></motion.path>
            </Leftsvg>
          </LeftBtn>
          <Box
            custom={back}
            variants={boxVariants}
            initial="entry"
            animate="center"
            exit="exit"
            key={visible}
          >
            <Text>{visible}</Text>
          </Box>
          <RightBtn onClick={next} key="rightbtn">
            <Rightsvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <motion.path
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                fill="rgba(256,256,256,0.4)"
              ></motion.path>
            </Rightsvg>
          </RightBtn>
        </AnimatePresence>
      </MotionWrapper>
      <TitleWrapper>Slider</TitleWrapper>
    </>
  );
}
export default MotionSlider;
