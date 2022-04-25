import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const MotionWrapper = styled(motion.div)`
  padding: 60px 60px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  border: 4px solid white;
  border-radius: 20px;
  overflow: hidden;
  div:first-child,
  div:last-child {
    grid-column: 2 span;
  }
`;
const Overlay = styled(motion.div)`
  padding: 60px 60px;
  width: 100%;
  height: 93%;
  top: 0.2%;
  left: 0%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  border: 4px solid white;
  &:hover {
    cursor: pointer;
  }
`;

const ShowingBox = styled(motion.div)`
  position: absolute;
  width: 60%;
  height: 500px;
  top: 15%;
  left: 20%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 10%;
  padding-left: 5%;
`;

const BigBox = styled(motion.div)`
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
  padding-bottom: 50px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const StickOne = styled.div`
  width: 50%;
  height: 30px;
  background-color: rgba(187, 0, 255, 0.1);
  border-radius: 10px;
  margin: 10px 0;
`;
const StickTwo = styled.div`
  width: 80%;
  height: 30px;
  background-color: rgba(187, 0, 255, 0.16);
  border-radius: 10px;
  margin: 10px 0;
`;
const StickThree = styled.div`
  width: 60%;
  height: 30px;
  background-color: rgba(187, 0, 255, 0.2);
  border-radius: 10px;
  margin: 10px 0;
`;
const Text = styled.h1`
  color: #4a69bd;
  display: block;
  font-family: "Dancing Script", cursive;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`;
const HR = styled.div`
  margin: 30px 0;
  width: 90%;
  height: 3px;
  background: rgba(187, 0, 255, 0.2);
`;

function LayoutBoxs() {
  const [id, setId] = useState<null | string>(null);
  return (
    <>
      <Wrapper>
        <MotionWrapper>
          {["1", "2", "3", "4"].map((n) => (
            <BigBox onClick={() => setId(n)} key={n} layoutId={n}>
              <Text>Click me</Text>
              <StickOne />
              <StickTwo />
              <StickThree />
            </BigBox>
          ))}
        </MotionWrapper>

        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <ShowingBox layoutId={id}>
                <Text>Click me to exit</Text>
                <StickOne />
                <StickTwo />
                <StickThree />
                <HR />
              </ShowingBox>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
export default LayoutBoxs;
