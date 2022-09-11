import React from "react";
import classes from "./HomePage.module.scss";
import imgMe from "../../assets/img/anatol.jpg";
import styled, { keyframes } from "styled-components";
import { fadeInLeftBig } from "react-animations";
import { FiArrowRightCircle } from "react-icons/fi";

const slideInDownAnimation = keyframes`${fadeInLeftBig}`;
const AnimationDiv = styled.div`
   animation: 6s ${slideInDownAnimation};
`;

const HomePage = () => {
   return (
      <div className={classes.container}>
         <div className={classes.photo}>
            <div className={classes.img_me}>
               <img src={imgMe} alt="" />
            </div>
         </div>
         <div className={classes.aboutMe}>
            <p>
               <AnimationDiv>
                  Hello!👋 My name is Anatoly Mineev. I live in Russia, in the
                  city of Togliatti. He studied at the Togliatti Polytechnic
                  College with a degree in programming. I'm into web
                  development. I really like the creation and design of
                  websites. I really want to work as a react developer!⚡
               </AnimationDiv>
            </p>
         </div>
         <div className={classes.other}>
            <b>
               <h2>MY STACK:</h2>
               <h3 align="left">Languages and Tools:</h3>
               <div className={classes.conteinerTools}>
                  <a
                     href="https://www.w3schools.com/css/"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                        width="40"
                        height="40"
                     />
                     <p>- CSS3</p>
                  </a>

                  <a
                     href="https://git-scm.com/"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                        alt="git"
                        width="40"
                        height="40"
                     />
                     <p> - GIT</p>
                  </a>
                  <a
                     href="https://www.w3.org/html/"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                        width="40"
                        height="40"
                     />
                     <p> - HTML5</p>
                  </a>
                  <a
                     href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                        width="40"
                        height="40"
                     />
                     <p> - JAVASCRIPT</p>
                  </a>
                  <a
                     href="https://www.photoshop.com/en"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                        alt="photoshop"
                        width="40"
                        height="40"
                     />
                     <p> - PHOTOSHOP</p>
                  </a>
                  <a
                     href="https://reactjs.org/"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                        width="40"
                        height="40"
                     />
                     <p> - REACT</p>
                  </a>
                  <a
                     href="https://redux.js.org"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                        alt="redux"
                        width="40"
                        height="40"
                     />
                     <p> - REDUX</p>
                  </a>
                  <a
                     href="https://sass-lang.com"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                        alt="sass"
                        width="40"
                        height="40"
                     />
                     <p> - SASS</p>
                  </a>
                  <a
                     href="https://www.typescriptlang.org/"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.underline_one}
                  >
                     <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="typescript"
                        width="40"
                        height="40"
                     />
                     <p> - TYPESCRIPT</p>
                  </a>
               </div>
               <div className={classes.conteiner_myProject}>
                  <span>MY PROJECT:</span>
                  <div className={classes.myProject} align="left">
                     <div>
                        <FiArrowRightCircle
                           style={{
                              background: "#66FF00",
                              borderRadius: 50,
                              fontSize: 40,
                           }}
                        />
                        <a
                           href="https://tolanchik1987.github.io/myfirstproject"
                           alt=""
                           className={classes.underline_one}
                        >
                           {" "}
                           Plise see my project
                        </a>
                     </div>
                     <div>
                        <FiArrowRightCircle
                           style={{
                              background: "#66FF00",
                              borderRadius: 50,
                              fontSize: 40,
                           }}
                        />
                        <a
                           href="https://github.com/tolanchik1987"
                           alt=""
                           className={classes.underline_one}
                        >
                           {" "}
                           Plise see my github profile
                        </a>
                     </div>
                  </div>
               </div>
               <div>
                  <img
                     align="right"
                     alt="Coding"
                     width="100%"
                     src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  />
               </div>
               <div className={classes.connectWithMe}>
                  <h4 align="right">Connect with me:</h4>
                  <div align="right">
                     <a href="https://vk.com/id134873524" target="blank">
                        <img
                           align="center"
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png"
                           alt="tolanchik1987"
                           height="30"
                           width="30"
                        />
                     </a>
                     <a
                        href="https://instagram.com/tolanchik1987"
                        target="blank"
                     >
                        <img
                           align="center"
                           src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                           alt="tolanchik1987"
                           height="30"
                           width="40"
                        />
                     </a>
                  </div>
               </div>
            </b>
            <div>Anatoly Mineev &copy; 2022</div>
         </div>
      </div>
   );
};

export default HomePage;
