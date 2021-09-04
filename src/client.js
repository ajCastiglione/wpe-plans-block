import { render } from "@wordpress/element";
import Test from "./app/Test";

window.addEventListener("DOMContentLoaded", (event) => {
	const wrappers = document.getElementsByClassName('my-block-wrapper');
	for (let wrapper of wrappers) {
		render(<Test />, wrapper);
	}
});
