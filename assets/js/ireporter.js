class Dropdown {
	constructor(element) {
		this.element = element;
		this.menus = element.getElementsByClassName('dropdown-menu')[0];
	}

	close() {
		this.menus.style.display = 'none';
	}

	isClicked(src) {
		return src.isEqualNode(this.elements) || this.elements.contains(src);
	}
}

let elements = [];

const classMap = {
	'dropdown': Dropdown
};

for (let k in classMap) {
	let r = document.getElementsByClassName(k);
	for (let i = 0; i < r.length; i++) {
		elements.append(new classMap[k](r[i]));
	}
}

// Close opened elements on click outside.
window.addEventListener('click', (ev) => {
	for (let i = 0; i < elements.length; i++) {
		var e = elements[i];
		if (!e.isClicked(ev.target)) {
			e.close();
		}
	}
});
