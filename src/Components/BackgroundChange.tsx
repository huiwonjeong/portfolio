import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  position: relative;
`;
const HR = styled.div`
  border: 0;
  height: 3px;
  background: white;
  position: absolute;
  top: 50%;
  width: 100%;
`;
const TitleWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  click: { borderRadius: "50%" },
};

function BackgroundChange() {
  const MotionWrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [boxWidth, setBoxWidth] = useState(0);

  const resizingHandler = () => {
    setBoxWidth(MotionWrapperRef.current?.offsetWidth ?? 0);
  };

  useEffect(() => {
    setBoxWidth(MotionWrapperRef.current?.offsetWidth ?? 0);
    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  const gradient = useTransform(
    x,
    [-boxWidth / 2, 0, boxWidth / 2],
    [
      "linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))",
      "linear-gradient(135deg,rgb(238,0,153),rgb(221,0,238))",
      "linear-gradient(135deg,rgb(0,238,155),rgb(238,178,0))",
    ]
  );

  return (
    <>
      <MotionWrapper ref={MotionWrapperRef} style={{ background: gradient }}>
        <HR key="hr" />
        <Box
          style={{ x }}
          drag="x"
          dragConstraints={MotionWrapperRef}
          dragElastic={0}
          variants={boxVariants}
          whileTap="click"
        >
          <Text>Swape Me</Text>
        </Box>
      </MotionWrapper>
      <TitleWrapper>
        Changing
        <br /> Background
      </TitleWrapper>
    </>
  );
}
export default BackgroundChange;
