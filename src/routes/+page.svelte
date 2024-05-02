<script lang="ts">
	import Layananright from '$lib/layananright.svelte';
	import Layananleft from '$lib/layananleft.svelte';
	import dpkCursor from '$lib/dpkCursor.ts';
	import Layanan from '$lib/layanan.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import * as Menubar from '$lib/components/ui/menubar';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import SplitType from 'split-type';
	import Lenis from 'lenis';
	import { Svrollbar } from 'svrollbar';
	// import UxCursor from 'ux-cursor';
	// import Cursor from 'custom-cursor'

	// export let data: PageData;

	gsap.registerPlugin(ScrollTrigger);

	onMount(async () => {
		// UxCursor({
		// 	size: 30, // Cambio del ancho y alto del cursor. Por defecto está en 25
		// 	mixBlend: 'exclusion', // filtro mixBlend. Por defecto está en exclusion
		// 	borderRadius: '50%', //Cambiar el border radius. Por defecto está en 50%
		// 	color: '#fff', // Cambiar el color de fondo del curosr. Por defecto es blanco
		// 	border: 'none', // Agrega un borde al cursor. Por defecto es none
		// 	autoAlpha: '100%' // Cambia la opacidad del cursor. Por defecto es 100%%
		// });
		// const dpkCursor = await import('dpk_cursor/dpkCursor.min.js');
		// import { dpkCursor } from 'dpk_cursor/dpkCursor.min.js';
		const customCursor = new dpkCursor({ ease: 0.11 });
		let splitIntro = new SplitType('.introx');
		let splitSolusi = new SplitType('.solusix');
		let splitClient = new SplitType('.clientx');

		// SECTION 1
		const sec1_tl = gsap.timeline();

		sec1_tl.to('.mask', {
			// autoAlpha: 1,
			maskSize: '1000vh',
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '200%'
			}
		});

		sec1_tl.to('.showreel-overlay', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '200%'
			}
		});

		sec1_tl.to('.intro-desc', {
			autoAlpha: 0,
			y: -75,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '200%'
			}
		});

		sec1_tl.to('.intro-batik', {
			autoAlpha: 0,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '300%'
			}
		});

		sec1_tl.to('.header', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				start: '50%',
				end: '150%',
				scrub: false,
				markers: false,
				onEnter() {
					// sec1_tl.to(splitSolusi.lines, { autoAlpha: 1 });
					sec1_tl.to('.header', { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.01 });
				},
				onLeaveBack() {
					sec1_tl.to('.header', { y: -100, autoAlpha: 0, duration: 1, stagger: 0.001 });
				}
			}
		});

		sec1_tl.to('.introx', {
			// y: 24,
			autoAlpha: 1,
			// duration: 3.5,
			// stagger: 0.01,
			scrollTrigger: {
				trigger: '.section-1',
				start: '50%',
				end: '150%',
				scrub: false,
				markers: false,
				toggleActions: 'play reset reset reset',
				onEnter() {
					sec1_tl.to(splitIntro.chars, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.01 });
				},
				onLeaveBack() {
					sec1_tl.to(splitIntro.chars, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
				},

				onEnterBack() {
					sec1_tl.to(splitIntro.chars, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.01 });
				},
				onLeave() {
					sec1_tl.to(splitIntro.chars, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
				}
			}
		});

		sec1_tl.to('.clientx', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				start: '150%',
				end: '250%',
				scrub: false,
				markers: false,
				onEnter() {
					// sec1_tl.to(splitSolusi.lines, { autoAlpha: 1 });
					sec1_tl.to(splitClient.lines, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.2 });
				},
				onLeaveBack() {
					sec1_tl.to(splitClient.lines, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
				},

				onEnterBack() {
					sec1_tl.to(splitClient.lines, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.2 });
					// sec1_tl.to(splitSolusi.lines, { y: 24, autoAlpha: 0, duration: 0.5, stagger: 0.2 });
				},
				onLeave() {
					sec1_tl.to(splitClient.lines, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
				}
			}
		});

		sec1_tl.to('.solusix', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				start: '250%',
				end: '350%',
				scrub: false,
				markers: false,
				onEnter() {
					// sec1_tl.to(splitSolusi.lines, { autoAlpha: 1 });
					sec1_tl.to(splitSolusi.chars, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.01 });
				},
				onLeaveBack() {
					sec1_tl.to(splitSolusi.chars, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
				},

				onEnterBack() {
					sec1_tl.to(splitSolusi.chars, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.01 });
					// sec1_tl.to(splitSolusi.lines, { y: 24, autoAlpha: 0, duration: 0.5, stagger: 0.2 });
				}
				// onLeave() {
				// 	sec1_tl.to(splitSolusi.chars, { y: -24, autoAlpha: 0, duration: 0.09, stagger: 0.007 });
				// }
			}
		});

		sec1_tl.to('.slider', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '250%',
				end: '260%'
			}
		});

		sec1_tl.to('.intro-title', {
			autoAlpha: 0,
			scale: 2,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '30%'
			}
		});

		sec1_tl.to('.header2', {
			opacity: 1,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '350%'
			}
		});

		sec1_tl.to('.showreel', {
			y: -1000,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '350%',
				end: '450%'
			}
		});

		sec1_tl.to('.solusi', {
			y: -1000,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '350%',
				end: '450%'
			}
		});

		sec1_tl.to('.slider', {
			y: -1000,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '350%',
				end: '450%'
			}
		});

		sec1_tl.to('.header', {
			y: -1000,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '350%',
				end: '450%'
			}
		});

		sec1_tl.to('.showreel-overlay', {
			y: -1000,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '350%',
				end: '450%'
			}
		});

		sec1_tl.to('.layanan', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				markers: false,
				start: '350%'
			}
		});

		// sec1_tl.fromTo('.mask', {
		// 	// autoAlpha: 1,
		// 	maskSize: '1000vh',
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '340%',
		// 		end: '380%'
		// 	}
		// },
		// {
		// 	// autoAlpha: 1,
		// 	maskSize: '230vh',
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '340%',
		// 		end: '380%'
		// 	}
		// });

		// sec1_tl PINNER + MAX DURATION SETTER
		sec1_tl.to('.section-1', {
			// autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				pin: true,
				markers: false,
				end: '450%'
			}
		});

		// SECTION 2
		const sec2_tl = gsap.timeline();

		// sec2_tl PINNER + MAX DURATION SETTER
		sec2_tl.to('.section-2', {
			// autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-2',
				pin: false,
				markers: false,
				end: '350%'
			}
		});

		gsap.from('.who-marquee', {
			repeat: -1,
			xPercent: -50,
			duration: 30,
			ease: 'none'
		});

		gsap.to('.who-marquee-reverse', {
			repeat: -1,
			xPercent: -50,
			duration: 30,
			ease: 'none'
		});

		// gsap.set('.solusix', { autoAlpha: 0 });
		// gsap.set('.showreel', { filter: 'brightness(40%)' });
		gsap.set(splitIntro.chars, { autoAlpha: 0 });
		// gsap.set('.introx', { autoAlpha: 0 });

		gsap.set(splitSolusi.chars, { autoAlpha: 0 });
		// gsap.set('.solusix', { autoAlpha: 0 });

		gsap.set(splitClient.lines, { autoAlpha: 0 });
		// gsap.set('.clientx', { autoAlpha: 0 });

		// gsap.set('.client', { autoAlpha: 0 });
		// gsap.set('.mambu', { y: 190 });

		const lenis = new Lenis();

		// lenis.on('scroll', ScrollTrigger.update);

		// gsap.ticker.add((time) => {
		// 	lenis.raf(time * 1100);
		// });

		// gsap.ticker.lagSmoothing(0);

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<Svrollbar />

<div>
	<!-- <div class="absolute float-right right-0 z-50 pt-5 pr-5">
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>Menu</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>
						New Tab
						<Menubar.Shortcut>⌘T</Menubar.Shortcut>
					</Menubar.Item>
					<Menubar.Item>New Window</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Share</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Print</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>
	</div> -->

	<div class="header fixed z-50 invert">
		<div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10">
			<div class="pt-10">
				<img width="48px" src="logo.svg" alt="golo" />
			</div>
			<div class="pt-12">
				<img width="36px" class="float-right" src="burger.svg" alt="golo" />
			</div>
		</div>
	</div>

	<div class="header2 fixed -z-10 opacity-0" style="filter: invert(88%) sepia(34%) saturate(793%) hue-rotate(31deg) brightness(77%) contrast(84%);">
		<div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10">
			<div class="pt-10">
				<img width="48px" src="logo.svg" alt="golo" />
			</div>
			<div class="pt-12">
				<img width="36px" class="float-right" src="burger.svg" alt="golo" />
			</div>
		</div>
	</div>

	<div class="spacer section-1 flex items-center justify-center">
		<div class="z-50 h-screen">
			<div class="sampah absolute left-1/2 top-[50%] z-10 -translate-x-1/2 -translate-y-1/2">
				<p class="intro-title text-7xl font-bold tracking-tight text-white">sampah</p>
			</div>
			<div class="mask showreel">
				<video class="w-screen object-cover" id="showreel" loop autoplay muted>
					<source src="intro.mp4" type="video/mp4" />
				</video>
			</div>
			<div class="sampah absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 pt-64 text-center">
				<p class="intro-desc text-7xl font-bold tracking-tight text-black">
					akan menjadi <span style="color: #71A324;" class="underline">asset</span> jika diolah dengan benar.
				</p>
			</div>
		</div>
		<div class="absolute">
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold">
				<div class="who-marquee-reverse who inline-block text-black">
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold">
				<div class="who-marquee who inline-block text-black">
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold">
				<div class="who-marquee-reverse who inline-block text-black">
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold">
				<div class="who-marquee who inline-block text-black">
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
					<img class="inline w-96" src="/pattern.svg" alt="golo" />
				</div>
			</div>
		</div>
		<div class="showreel-overlay intro absolute z-50 flex flex-col items-center justify-center pt-0 text-center opacity-0">
			<p class="introx font-jost text-7xl font-normal leading-none text-white">Pilah Berkah merupakan</p>
			<p class="introx font-jost text-[350px] font-extrabold leading-none text-white">SARANA</p>
			<p class="introx font-jost mx-80 text-5xl font-light text-white">Untuk mengubah segala jenis sampah Anda menjadi sebuah asset.</p>
		</div>
		<div class="showreel-overlay client absolute z-50 flex flex-col items-center justify-center pt-0 text-center opacity-0">
			<p class="clientx font-jost text-7xl font-normal leading-none text-white">Lebih dari</p>
			<p class="clientx font-jost text-[350px] font-extrabold leading-none text-white">500+</p>
			<p class="clientx font-jost mx-80 text-5xl font-light text-white">Client mempercayakan sampah mereka kepada kami</p>
			<div class="clientx flex whitespace-nowrap pt-10 font-extrabold">
				<div class="who-marquee who inline-block text-black">
					<img class="inline w-64 p-5" src="/client/visa.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/samsung.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/zoom.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/venmo.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/lenovo.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/visa.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/samsung.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/zoom.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/venmo.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/lenovo.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/visa.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/samsung.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/zoom.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/venmo.png" alt="golo" />
					<img class="inline w-64 p-5" src="/client/lenovo.png" alt="golo" />
				</div>
			</div>
		</div>
		<div class="showreel-overlay solusi absolute z-50 flex flex-col items-center justify-center pt-0 text-center opacity-0">
			<p class="solusix font-jost text-7xl font-normal leading-none text-white">Kami memberikan</p>
			<p class="solusix font-jost text-[350px] font-extrabold leading-none text-white">SOLUSI</p>
			<p class="solusix font-jost mx-80 text-5xl font-light text-white">Dengan 5 layanan berupa:</p>
		</div>
		<img width="64px" class="slider absolute bottom-0 z-50 pb-3 opacity-0" src="bur.svg" alt="golo" />
		<div class="layanan absolute -z-50 opacity-0">
			<Layanan>
				<img class="inline w-96 opacity-55" src="/pelatihan_pt.svg" alt="golo" slot="layanan-pattern" />
			</Layanan>
			<!-- <Layananleft>
				<!== <p class="font-jost absolute z-50 text-center text-7xl font-bold" slot="layanan-title">aaaaaa</p>
				<img class="inline w-96" src="/pendampingan.png" alt="" slot="layanan-img" /> ==>
				<p class="font-jost absolute text-center text-7xl font-bold" slot="layanan-title">PENDAMPINGAN</p>
				<img class="inline w-96" src="/pendampingan.png" alt="" slot="layanan-img"/>
				<p class="text-2xl text-right p-32" style="color: #888888;" slot="layanan-desc">
					Our intuitive interface makes it easy to navigate and find what you need ur intuitive
					interface makes it easy.
				</p>
				<img class="inline w-56" src="/pendampingan_pt.svg" alt="golo" slot="layanan-pattern"/>
			</Layananleft>
			<Layananright>
				<!== <p class="font-jost absolute text-center text-7xl font-bold" slot="layanan-title">aaaaaa</p>
				<img class="inline w-96" src="/pendampingan.png" alt="" slot="layanan-img" /> ==>
				<p class="font-jost absolute text-center text-7xl font-bold" slot="layanan-title">PELATIHAN</p>
				<img class="inline w-96" src="/pelatihan.png" alt="" slot="layanan-img"/>
				<p class="text-2xl text-right p-32" style="color: #888888;" slot="layanan-desc">
					Our intuitive interface makes it easy to navigate and find what you need ur intuitive
					interface makes it easy.
				</p>
				<img class="inline w-56" src="/pelatihan_pt.svg" alt="golo" slot="layanan-pattern"/>
			</Layananright> -->
		</div>

		<!-- <div class="relative inline-block pt-10">
			<button class="cursor-default relative w-[1960px] h-[60px] z-10 bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full overflow-hidden">
			  <div class="absolute top-0 left-0 w-full h-full">
				<video class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full" src="intro.mp4" autoplay muted loop></video>
			  </div>
			  <span class="relative z-20">HOLA</span>
			</button>
		  </div> -->
	</div>
	<div class="spacer section-2">
		<!-- <Layanan>
			<img class="inline w-96 opacity-55" src="/pelatihan_pt.svg" alt="golo" slot="layanan-pattern"/>
		</Layanan> -->
	</div>
	<div class="spacer section-3">
		<!-- <Layananleft>
			<!== <p class="font-jost absolute text-center text-7xl font-bold" slot="layanan-title">aaaaaa</p>
			<img class="inline w-96" src="/pendampingan.png" alt="" slot="layanan-img" /> ==>
			<p class="font-jost absolute text-center text-7xl font-bold" slot="layanan-title">PENGELOLAAN</p>
			<img class="inline w-96" src="/pengelolaan.png" alt="" slot="layanan-img"/>
			<p class="text-2xl text-right p-32" style="color: #888888;" slot="layanan-desc">
				Our intuitive interface makes it easy to navigate and find what you need ur intuitive
				interface makes it easy.
			</p>
			<img class="inline w-56" src="/pengelolaan_pt.svg" alt="golo" slot="layanan-pattern"/>
		</Layananleft> -->
	</div>
</div>
