interface Rect {
	readonly id: string; // only reading
	color?: string; // optional parameter
	size: {
		width: number;
		heidth: number;
	};
}

const rect1: Rect = {
	id: '1234',
	size: {
		width: 20,
		heidth: 30,
	},
};

const rect2: Rect = {
	id: '1234',
	size: {
		width: 20,
		heidth: 30,
	},
	color: '#ccc',
};

rect2.color = 'black';
// rect2.id = 322

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ==========

interface RectWidthArea extends Rect {
	getArea: () => number;
}

const rect5: RectWidthArea = {
	id: '1234',
	size: {
		width: 20,
		heidth: 30,
	},
	getArea(): number {
		return this.size.width * this.size.heidth;
	},
};

// ==========

interface Iclock {
	time: Date;
	setTime(date: Date): void;
}

class CLock implements Iclock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}

// ==========

interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: '1px soolid black',
	marginTop: '2px',
	borderRadius: '5px',
};
