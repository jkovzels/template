import './styles/main';
import { Hello } from "./components/Hello";

import './styles/modules/pageheader';

var element = document.createElement("div");
element.innerHTML = (new Hello()).render();
document.body.appendChild(element);