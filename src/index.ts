import './styles/main';
import { Hello } from "./components/Hello";

var element = document.createElement("div");
element.innerHTML = (new Hello()).render();
document.body.appendChild(element);