import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
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
  position: relative;
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
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #f39c12;
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

function MotionSlider() {
  const MotionWrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [boxWidth, setBoxWidth] = useState(0);

  const { scrollY, scrollYProgress } = useViewportScroll();

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

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 3.2]);

  return (
    <>
      <TitleWrapper>
        Scroll
        <br /> Detector
      </TitleWrapper>
      <MotionWrapper ref={MotionWrapperRef}>
        <AnimatePresence>
          <Box style={{ scale }} variants={boxVariants}>
            <Text>Scroll the page</Text>
          </Box>
        </AnimatePresence>
      </MotionWrapper>
    </>
  );
}
export default MotionSlider;
