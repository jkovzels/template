import './styles/main';
import { Hello } from "./components/Hello";

import './styles/modules/pageheader';

class Startup {
    public static main(): void {
		var element = document.createElement("div");
		element.innerHTML = (new Hello()).render();
		document.body.appendChild(element);
        console.log("Tempalte is on. Up and Running.");
    }
}
Startup.main();