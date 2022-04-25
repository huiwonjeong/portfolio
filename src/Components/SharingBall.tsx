import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";

const MotionWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  border: 4px solid white;
  border-radius: 20px;
  width: 100%;
  margin: 20px 0;
  overflow: hidden;
`;
const TitleWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;

  color: white;

  font-weight: 600;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 60px;
  width: 60px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Text = styled.h1`
  color: #4a69bd;
  display: block;
  font-family: "Dancing Script", cursive;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`;
const boxVariants = {
  click: {
    borderRadius: "50%",
  },
};

function SharingBall() {
  const [clicked, setClicked] = useState(false);
  const toggleFirstclicked = () => setClicked(false);
  const toggleSecondclicked = () => setClicked(true);
  return (
    <>
      <TitleWrapper>Sharing A Ball</TitleWrapper>
      <MotionWrapper>
        <Box onClick={toggleFirstclicked}>
          {!clicked ? (
            <Circle
              layoutId="circle"
              style={{ borderRadius: "50%", scale: "1" }}
            />
          ) : (
            <Text>
              Click
              <br />
              Me
            </Text>
          )}
        </Box>
        <Box onClick={toggleSecondclicked}>
          {clicked ? (
            <Circle
              layoutId="circle"
              style={{ borderRadius: "0", scale: "1.5" }}
            />
          ) : (
            <Text>
              Click
              <br />
              Me
            </Text>
          )}
        </Box>
      </MotionWrapper>
    </>
  );
}
export default SharingBall;
