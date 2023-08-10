import { createGlobalStyle } from 'styled-components';
import background from '../Globals/background.jpg';

const Globals = createGlobalStyle`
@import 'node_modules/modern-normalize/modern-normalize.css';
@import url('https://fonts.googleapis.com/css?family=Lato:100,400,700|Montserrat:500i&display=swap');

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

body {
  font-size: 100%;
  background-image: url(${background});
  background-size: cover;
  font-family: 'Lato', sans-serif;
 
}

h1 {
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: 0.5em;
  font-weight: bold;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
  margin-bottom: 0.75em;
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
  color: beige;
}

div {
  margin: 50px;
  width: 500px;
    background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(228, 215, 215, 0.8) 37%);
    padding: 10px;
    border-radius: 10px;
    border: 4px solid rgba(255, 255, 255, 0.2);
  }

li{
list-style: none;
}

button {
  width: 140px;
  border-radius: 20px;
  color: #3c373e;
  transition: .2s linear;
   font-size: 20px;
   outline: 2px solid rgba(255, 255, 255, 0.4);
}

button:hover {
    box-shadow:  0px 0px 5px 2px rgba(255, 255, 255, 1);
    color: black;

}
`;

export default Globals;
