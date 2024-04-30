<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import * as Menubar from '$lib/components/ui/menubar';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import SplitType from 'split-type';
	import Lenis from 'lenis';
	// import UxCursor from 'ux-cursor';
	// import Cursor from 'custom-cursor'
	

	export let data: PageData;

	gsap.registerPlugin(ScrollTrigger);

	onMount(async () => {
		
		// UxCursor({
		// 	size: 30, // Cambio del ancho y alto del cursor. Por defecto está en 25
		// 	mixBlend: 'exclusion', // filtro mixBlend. Por defecto está en exclusion
		// 	borderRadius: '50%', //Cambiar el border radius. Por defecto está en 50%
		// 	color: '#fff', // Cambiar el color de fondo del curosr. Por defecto es blanco
		// 	border: 'none', // Agrega un borde al cursor. Por defecto es none
		// 	opacity: '100%' // Cambia la opacidad del cursor. Por defecto es 100%%
		// });
		// const cursor = await import('$lib/cursor');
		const customCursor = new dpkCursor({ ease: 0.11 });
		let splitSolusi = new SplitType('.solusix');
		let splitClient = new SplitType('.clientx');

		// ███████╗███████╗ ██████╗ ██╗
		// ██╔════╝██╔════╝██╔════╝███║
		// ███████╗█████╗  ██║     ╚██║
		// ╚════██║██╔══╝  ██║      ██║
		// ███████║███████╗╚██████╗ ██║
		// ╚══════╝╚══════╝ ╚═════╝ ╚═╝
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

		sec1_tl.to('.solusi', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				start: '80%',
				end: '110%',
				scrub: false,
				markers: true,
				onEnter() {
					// sec1_tl.to(splitSolusi.lines, { opacity: 1 });
					sec1_tl.to(splitSolusi.chars, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.005 });
				},
				onLeaveBack() {
					sec1_tl.to(splitSolusi.chars, { y: -24, opacity: 0, duration: 0.5, stagger: 0.005 });
				},

				onEnterBack() {
					sec1_tl.to(splitSolusi.chars, { y: 24, opacity: 1, duration: 0.5, stagger: 0.005 });
					// sec1_tl.to(splitSolusi.lines, { y: 24, opacity: 0, duration: 0.5, stagger: 0.2 });
				},
				onLeave() {
					sec1_tl.to(splitSolusi.chars, { y: -24, opacity: 0, duration: 0.5, stagger: 0.005 });
				}
			}
		});

		sec1_tl.to('.client', {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				start: '110%',
				end: '150%',
				scrub: false,
				markers: true,
				onEnter() {
					// sec1_tl.to(splitSolusi.lines, { opacity: 1 });
					sec1_tl.to(splitClient.lines, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.2 });
				},
				onLeaveBack() {
					sec1_tl.to(splitClient.lines, { y: -24, opacity: 0, duration: 0.5, stagger: 0.2 });
				},

				onEnterBack() {
					sec1_tl.to(splitClient.lines, { y: 24, opacity: 1, duration: 0.5, stagger: 0.2 });
					// sec1_tl.to(splitSolusi.lines, { y: 24, opacity: 0, duration: 0.5, stagger: 0.2 });
				},
				onLeave() {
					sec1_tl.to(splitClient.lines, { y: -24, opacity: 0, duration: 0.5, stagger: 0.2 });
				}
			}
		});

		// sec1_tl.to('.solusi', {
		// 	autoAlpha: 1,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		start: '100%',
		// 		end: '101%',
		// 		scrub: true,
		// 		markers: true,
		// 		onEnter() {
		// 			sec1_tl.from(splitSolusi.lines, { y: 24, opacity: 0, duration: 0.8, stagger: 0.02});
		// 		},
		// 		onEnterBack() {
		// 			sec1_tl.from(splitSolusi.lines, { y: 24, opacity: 0, duration: 0.8, stagger: 0.02});
		// 		},
		// 	}
		// });

		// sec1_tl.from('.showreel', {
		// 	// autoAlpha: 1,
		// 	filter: "blur(10px)",
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '0%',
		// 		end: '50%'
		// 	}
		// });

		// sec1_tl.to('.solusi', {
		// 	autoAlpha: 0.9,
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '50%',
		// 		end: '100%'
		// 	}
		// });

		// sec1_tl.from('.solusi', {
		// 	autoAlpha: 0.9,
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '100%',
		// 		end: '150%'
		// 	}
		// });

		// sec1_tl.to('.client', {
		// 	autoAlpha: 0.9,
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '150%',
		// 		end: '200%'
		// 	}
		// });

		// sec1_tl.from('.client', {
		// 	autoAlpha: 0.9,
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		scrub: true,
		// 		start: '200%',
		// 		end: '250%'
		// 	}
		// });

		sec1_tl.to('.intro-title', {
			autoAlpha: 0,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '10%'
			}
		});

		sec1_tl.to('.intro-desc', {
			autoAlpha: 0,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '10%'
			}
		});

		sec1_tl.to('.intro-batik', {
			autoAlpha: 0,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '0%',
				end: '100%'
			}
		});

		// sec1_tl PINNER + MAX DURATION SETTER
		sec1_tl.to('.section-1', {
			// autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-1',
				pin: true,
				markers: false,
				end: '800%'
			}
		});

		gsap.from('.who-marquee', {
			repeat: -1,
			xPercent: -50,
			duration: 50,
			ease: 'none'
		});

		gsap.to('.who-marquee-reverse', {
			repeat: -1,
			xPercent: -50,
			duration: 50,
			ease: 'none'
		});

		// gsap.set('.solusix', { opacity: 0 });
		gsap.set('.showreel', { filter: 'brightness(40%)' });
		gsap.set(splitSolusi.chars, { opacity: 0 });
		gsap.set('.solusi', { autoAlpha: 0 });

		gsap.set(splitClient.lines, { opacity: 0 });
		gsap.set('.client', { autoAlpha: 0 });

		// gsap.set('.client', { autoAlpha: 0 });
		// gsap.set('.mambu', { y: 190 });

		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});
</script>

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

	<div class="header fixed z-50">
		<div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10">
			<div class="pt-10">
				<img width="48px" src="logo.svg" alt="golo" />
			</div>
			<div class="pt-10">
				<img width="36px" class="float-right" src="burger.svg" alt="golo" />
			</div>
		</div>
	</div>

	<div class="spacer section-1 flex items-center justify-center">
		<div class="fixedflex h-screen">
			<div
				class="sampah absolute left-1/2 top-[50%] z-10 -translate-x-1/2 -translate-y-1/2 transform"
			>
				<p class="intro-title text-7xl font-bold text-white">sampah</p>
			</div>
			<div class="mask">
				<video class="showreel w-screen object-cover" id="showreel" loop autoplay muted>
					<source src="intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div
				class="sampah absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform pt-72 text-center"
			>
				<p class="intro-desc text-7xl font-bold text-black dpk-hover" data-hover-text="Mambu">adalah asset jika anda mengolahnya.</p>
			</div>
		</div>
		<!-- <div class="absolute pt-0 solusix opacity-100 z-50 flex flex-col items-center justify-center text-center">
			<p class="text-7xl leading-none font-normal text-white font-futura">Menghadirkan solusi</p>
			<p class="text-[300px] leading-none font-extrabold text-white font-futura">ONE-STOP</p>
			<p class="text-5xl font-light text-white font-futura mx-80">Our intuitive interface makes it easy to navigate and find what you need.</p>
		</div> -->
		<div class="absolute">
			<!-- <div class="whitespace-nowrap font-extrabold">
				<div class="who-marquee inline-block who text-black opacity-5">
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
				</div>
			</div>
			<div class="whitespace-nowrap font-extrabold">
				<div class="who-marquee-reverse inline-block who text-black opacity-5 leading-none">
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
				</div>
			</div>
			<div class="whitespace-nowrap font-extrabold">
				<div class="who-marquee inline-block who text-black opacity-5">
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
					<span>PILAH BERKAH</span>
				</div>
			</div> -->
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold dpk-hover" data-hover-text="Telek">
				<div class="who-marquee-reverse who inline-block text-black">
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold dpk-hover" data-hover-text="Telek">
				<div class="who-marquee who inline-block text-black">
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold">
				<div class="who-marquee-reverse who inline-block text-black">
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="intro-batik flex whitespace-nowrap pt-1 font-extrabold">
				<div class="who-marquee who inline-block text-black">
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="/pattern.svg" alt="golo" />
				</div>
			</div>
		</div>
		<div
			class="solusi absolute flex flex-col items-center justify-center pt-0 text-center z-50"
		>
			<p class="solusix font-futura text-7xl font-normal leading-none text-white">
				Menghadirkan solusi
			</p>
			<p class="solusix font-futura text-[300px] font-extrabold leading-none text-white dpk-hover" data-hover-text="Pesing">
				ONE-STOP
			</p>
			<p class="solusix font-futura mx-80 text-5xl font-light text-white">
				Our intuitive interface makes it easy to navigate and find what you need.
			</p>
		</div>
		<div
			class="client absolute flex flex-col items-center justify-center pt-0 text-center"
		>
			<p class="clientx font-futura text-7xl font-normal leading-none text-white">Lebih dari</p>
			<p class="clientx font-futura text-[400px] font-extrabold leading-none text-white">5000+</p>
			<p class="clientx font-futura mx-80 text-5xl font-light text-white">
				Client mempercayakan sampah mereka kepada kami
			</p>
			<div class="clientx flex whitespace-nowrap pt-20 font-extrabold">
				<div class="who-marquee who inline-block text-black">
					<img class="inline p-5" src="/client/visa.png" alt="golo" />
					<img class="inline p-5" src="/client/samsung.png" alt="golo" />
					<img class="inline p-5" src="/client/zoom.png" alt="golo" />
					<img class="inline p-5" src="/client/venmo.png" alt="golo" />
					<img class="inline p-5" src="/client/lenovo.png" alt="golo" />
					<img class="inline p-5" src="/client/visa.png" alt="golo" />
					<img class="inline p-5" src="/client/samsung.png" alt="golo" />
					<img class="inline p-5" src="/client/zoom.png" alt="golo" />
					<img class="inline p-5" src="/client/venmo.png" alt="golo" />
					<img class="inline p-5" src="/client/lenovo.png" alt="golo" />
					<img class="inline p-5" src="/client/visa.png" alt="golo" />
					<img class="inline p-5" src="/client/samsung.png" alt="golo" />
					<img class="inline p-5" src="/client/zoom.png" alt="golo" />
					<img class="inline p-5" src="/client/venmo.png" alt="golo" />
					<img class="inline p-5" src="/client/lenovo.png" alt="golo" />
				</div>
			</div>
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
	<div class="spacer section-2">b</div>
</div>
