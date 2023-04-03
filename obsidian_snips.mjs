export default {
	alpha: {
		trigger: "a",
		completion: `\\alpha`,
	},
	beta: {
		trigger: "b",
		completion: `\\beta`,
	},
	gamma: {
		trigger: "g",
		completion: `\\gamma`,
	},
	delta: {
		trigger: "d",
		completion: `\\delta`,
	},
	epsilon: {
		trigger: "e",
		completion: `\\epsilon`,
	},
	zeta: {
		trigger: "z",
		completion: `\\zeta`,
	},
	eta: {
		trigger: "h",
		completion: `\\eta`,
	},
	theta: {
		trigger: "t",
		completion: `\\theta`,
	},
	iota: {
		trigger: "i",
		completion: `\\iota`,
	},
	kappa: {
		trigger: "k",
		completion: `\\kappa`,
	},
	lambda: {
		trigger: "l",
		completion: `\\lambda`,
	},
	mu: {
		trigger: "m",
		completion: `\\mu`,
	},
	nu: {
		trigger: "n",
		completion: `\\nu`,
	},
	xi: {
		trigger: "x",
		completion: `\\xi`,
	},
	omicron: {
		trigger: "o",
		completion: `\\omicron`,
	},
	pi: {
		trigger: "p",
		completion: `\\pi`,
	},
	rho: {
		trigger: "r",
		completion: `\\rho`,
	},
	sigma: {
		trigger: "s",
		completion: `\\sigma`,
	},
	tau: {
		trigger: "q",
		completion: `\\tau`,
	},
	upsilon: {
		trigger: "u",
		completion: `\\upsilon`,
	},
	phi: {
		trigger: "f",
		completion: `\\phi`,
	},
	chi: {
		trigger: "c",
		completion: `\\chi`,
	},
	psi: {
		trigger: "y",
		completion: `\\psi`,
	},
	omega: {
		trigger: "w",
		completion: `\\omega`,
	},
	Gamma: {
		trigger: "G",
		completion: `\\Gamma`,
	},
	Delta: {
		trigger: "D",
		completion: `\\Delta`,
	},
	Theta: {
		trigger: "T",
		completion: `\\Theta`,
	},
	Lambda: {
		trigger: "L",
		completion: `\\Lambda`,
	},
	Xi: {
		trigger: "X",
		completion: `\\Xi`,
	},
	Pi: {
		trigger: "P",
		completion: `\\Pi`,
	},
	Sigma: {
		trigger: "S",
		completion: `\\Sigma`,
	},
	Phi: {
		trigger: "F",
		completion: `\\Phi`,
	},
	Psi: {
		trigger: "Y",
		completion: `\\Psi`,
	},
	Omega: {
		trigger: "W",
		completion: `\\Omega`,
	},

	dot: {
		trigger: ".",
		completion: `\\cdot`,
	},
	and: {
		trigger: "ba",
		completion: `\\wedge`,
	},
	xor: {
		trigger: "bx",
		completion: `\\oplus`,
	},
	or: {
		trigger: "bo",
		completion: `\\vee`,
	},
	implies: {
		trigger: "=",
		completion: `\\implies`,
	},
	times: {
		trigger: "8",
		completion: `\\times`,
	},
	sup: {
		trigger: "6",
		completion: `^{%}`,
	},
	sub: {
		trigger: "-",
		completion: `_{%}`,
	},
	doll: {
		trigger: "4",
		completion: `$%$`,
	},
	mid: {
		trigger: "|",
		completion: `\\mid`,
	},
	infinity: {
		trigger: "0",
		completion: `\\infty`,
	},

	th: {
		trigger: "th",
		completion: `^{th}`,
	},

	sum: {
		trigger: "xs",
		completion: `\\sum_{%}^{%}`,
	},
	prod: {
		trigger: "xp",
		completion: `\\prod_{%}^{%}`,
	},
	lim: {
		trigger: "xl",
		completion: `\\lim_{% \\to %}`,
	},
	int: {
		trigger: "xi",
		completion: `\\int_{%}^{%}`,
	},
	frac: {
		trigger: "/",
		completion: `\\frac{%}{%}`,
	},
	binom: {
		trigger: "xb",
		completion: `\\binom{%}{%}`,
	},
	floor: {
		trigger: "xf",
		completion: `\\lfloor%\\rfloor`,
	},
	ceil: {
		trigger: "xc",
		completion: `\\lceil%\\rceil`,
	},
	Floor: {
		trigger: "xF",
		completion: `\\left\\lfloor%\\right\\rfloor`,
	},
	Ceil: {
		trigger: "xC",
		completion: `\\left\\lceil%\\right\\rceil`,
	},
	vec: {
		trigger: "vv",
		completion: `\\vec{%}`,
	},
	hat: {
		trigger: "vh",
		completion: `\\hat{%}`,
	},
	overline: {
		trigger: "vo",
		completion: `\\overline{%}`,
	},
	underbrace: {
		trigger: "vu",
		completion: `\\underbrace{%}_{%}`,
	},
	root: {
		trigger: "vr",
		completion: `\\sqrt{%}`,
	},

	paren: {
		trigger: "(",
		completion: `\\left(%\\right)`,
	},
	curly: {
		trigger: "{",
		completion: `\\left{%\\right}`,
	},
	box: {
		trigger: "[",
		completion: `\\left[%\\right]`,
	},

	matrix: {
		trigger: "[]",
		completion: `\\begin{bmatrix}
%
\\end{bmatrix}`,
	},
	align: {
		trigger: "==",
		completion: `\\begin{align}
%
\\end{align}`,
	},
	boxed: {
		trigger: "vb",
		completion: `\\boxed{
%
}`,
	},
};
