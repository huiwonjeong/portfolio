import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const MotionWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
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
  font-family: "Dancing Script", cursive;
  color: white;

  font-weight: 600;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #f39c12;
  &:hover {
    cursor: pointer;
  }
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

function DragCircle() {
  const MotionWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <TitleWrapper>Draggable Box</TitleWrapper>
      <MotionWrapper ref={MotionWrapperRef}>
        <Box
          drag
          dragConstraints={MotionWrapperRef}
          variants={boxVariants}
          whileTap="click"
        >
          <Text>Drag Me</Text>
        </Box>
      </MotionWrapper>
    </>
  );
}
export default DragCircle;
