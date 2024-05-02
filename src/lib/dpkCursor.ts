export default class dpkCursor {
	constructor(a = {}) {
		(this.option = { ease: a.ease || 0.25 }), (this.animationFrame = null), (this.mousePos = { x: 0, y: 0 }), (this.cursorPos = { x: 0, y: 0 }), this.init();
	}
	createCursor() {
		(this.cursor = document.createElement('div')), this.cursor.classList.add('dpkCursor'), document.body.appendChild(this.cursor);
	}
	getPosition() {
		window.addEventListener('mousemove', (a) => {
			(this.mousePos.x = a.x), (this.mousePos.y = a.y);
		});
	}
	setPosition() {
		(this.cursorPos.x += (this.mousePos.x - this.cursorPos.x) * this.option.ease), (this.cursorPos.y += (this.mousePos.y - this.cursorPos.y) * this.option.ease), (this.cursor.style.transform = `translate3d(calc(${this.cursorPos.x}px - 50%) ,calc(${this.cursorPos.y}px - 50%), 0)`), (this.animationFrame = requestAnimationFrame(this.setPosition.bind(this)));
	}
	reset() {
		(this.cursor.innerHTML = ''), (this.cursor.style.background = ''), (this.cursor.className = 'dpkCursor');
	}
	setHover(a) {
		let b = a.getAttribute('data-hover-text'),
			c = a.getAttribute('data-hover-img'),
			d = a.getAttribute('data-hover-class'),
			e = a.getAttribute('data-hover-bg');
		b && (this.cursor.innerHTML = b), d ? this.cursor.classList.add(d) : this.cursor.classList.add('hover-active'), e && ((this.cursor.style.backgroundColor = e), this.cursor.classList.add('hover-bg')), c && ((this.cursor.style.backgroundImage = `url(${c})`), this.cursor.classList.add('hover-img'));
	}
	effect() {
		const a = document.querySelectorAll('.dpk-hover');
		a.forEach((a) => {
			a.addEventListener('mouseenter', () => this.setHover(a)), a.addEventListener('mouseleave', () => this.reset()), a.addEventListener('click', () => this.reset());
		});
	}
	init() {
		this.createCursor(), this.getPosition(), this.setPosition(), this.effect();
	}
	destroy() {
		cancelAnimationFrame(this.animationFrame), document.body.removeChild(this.cursor);
	}
}
