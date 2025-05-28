// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Mahalia H-R
// IG: mm_hr_
shape(() => Math.sin(time) + 1 * 3, .5, 0.011)
	.repeat(9.82, 5.006, () => a.fft[0] * 2.376, () => a.fft[1] * 2)
	.scrollY(0.754, 0.099)
	.layer(src(o1)
		.mask(o0)
		.luma(.01, .25)
		.invert(0.1))
	.modulate(o1, 0.024)
	.out(o0);
osc(50, 0.045, 0.519)
	.color(1.2, 0.2, 1.5)
	.modulate(osc(3.944)
		.rotate(1, 0.14))
	.rotate(0.794, 0.2)
	.out(o1);
render(o0);