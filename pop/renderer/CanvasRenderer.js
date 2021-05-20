class CanvasRenderer {
	constructor (w, h) {
		const canvas = document.createElement("canvas");
		this.w = canvas.width = w;
		this.h = canvas.height = h;
		this.view = canvas;
		this.ctx = canvas.getContext("2d");
	}

	render(container, clear = true) {
		const { ctx } = this;
		function renderRec (container) {
			container.children.forEach(child => {
				if (child.visible == false) {
					return;
				} // don't draw and exit !!

				ctx.save();
				// draw it
				if (child.pos) {
					ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
				}

				if (child.scale) {
					ctx.scale(child.scale.x, child.scale.y)
				}
				
				if (child.text) {
					// Text Objects
					const { font, fill, align } = child.style;
					if (font) ctx.font = font;
					if (fill) ctx.fillStyle = fill;
					if (align) ctx.textAlign = align;
					ctx.fillText(child.text, 0, 0);

				} else if (child.texture) {
					// Sprite Objects
					// child.size = child.size || 1
					// const dx = child.size * child.texture.img.width
					// const dy = child.size * child.texture.img.height
					// const offsetx = child.grows ? - dx / 2 : 0;
					// const offsety = child.grows ? - dy / 2 : 0;
					// ctx.drawImage(child.texture.img, offsetx, offsety, dx, dy);
					ctx.drawImage(child.texture.img, 0, 0);
				}

				if (child.children) {
					renderRec(child);
				}
				ctx.restore();
			})
		}
		if (clear) {
			ctx.clearRect(0, 0, this.w, this.h);
		}
		renderRec(container);
	}
}

export default CanvasRenderer;