import React from "react";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import Particle from "./components/Particles/Particle";
import styled, { keyframes } from "styled-components";
import { slideInUp, fadeInUp } from "react-animations";

const slideInDownAnimation = keyframes`${slideInUp}`;
const AnimationDiv = styled.div`
   animation: 2s ${slideInDownAnimation};
`;
const h1Animation = keyframes`${fadeInUp}`;
const AnimationH1 = styled.div`
   animation: 3s ${h1Animation};
`;

const App = () => {
   return (
      <div className="container">
         <div className="container_upBackground">
            <div className="hello">
               <AnimationH1>
                  <span>HELLO I`AM WEB DEWELOPER</span>
               </AnimationH1>
            </div>
            <Particle />
         </div>
         <div className="container_downBackground">
            <AnimationDiv>
               <HomePage />
            </AnimationDiv>
         </div>
      </div>
   );
};

export default App;
