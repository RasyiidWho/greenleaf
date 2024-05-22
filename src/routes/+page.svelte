<script lang="ts">
	import Ox from './../../static/ox.svg';
	import Layananright from '$lib/layananright.svelte';
	import Layananleft from '$lib/layananleft.svelte';
	import dpkCursor from '$lib/dpkCursor';
	import Layanan from '$lib/layanan.svelte';
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button/index';
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

	let gridContainer;
	let section2;
	let gridItem = [];
	let product;
	let canvas;

	gsap.registerPlugin(ScrollTrigger);

	let mlebukmetukke;

	onMount(async () => {
		const app = new Application(canvas);

		//-------------------------------------------------
		// HIDE UNHIDE FOR PERFORMACE
		//-------------------------------------------------


		gsap.to('.slide-1', { // video
			autoAlpha: 0,
			display: 'none',
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				start: '320%',
				end: '320%',
				toggleActions: 'play play reset reset'
			}
		});

		gsap.to('.slide-2', { // batik
			autoAlpha: 0,
			display: 'none',
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				start: '200%',
				end: '200%',
				toggleActions: 'play play reset reset'
			}
		});

		gsap.to('.slide-3', { // tulisan ngarep video
			autoAlpha: 1,
			display: 'flex',
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				start: '40%',
				end: '350%',
				// markers: false,
				toggleActions: 'play reset play reset'
			}
		});

		// gsap.to('.slide-3', {
		// 	autoAlpha: 0,
		// 	display: 'none',
		// 	// alpha: 0,
		// 	scrollTrigger: {
		// 		trigger: '.section-1',
		// 		start: '320%',
		// 		end: '320%',
		// 		toggleActions: 'play play reset reset'
		// 	}
		// });

		gsap.to('.slide-4', {
				autoAlpha: 1,
				display: 'flex',
				// alpha: 0,
				scrollTrigger: {
					trigger: '.section-1',
					start: '230%',
					end: '550%',
					markers: false,
					toggleActions: 'play reset play reset'
				}
			});


		gsap.to('.slide-5', {
			autoAlpha: 1,
			display: 'flex',
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				start: '250%',
				end: '250%',
				// markers: false,
				toggleActions: 'play play reset reset'
			}
		});

		app.load('https://draft.spline.design/HgtHooC66XC5tUEc/scene.splinecode').then(() => {
			// SECTION 2
			const sec2_tl = gsap.timeline();
			// SECTION 1
			const sec1_tl = gsap.timeline();

			sec1_tl.to('.mask', {
				maskSize: '500%',
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
					start: '40%',
					end: '50%'
				}
			});

			sec1_tl.to('.intro-title', {
				autoAlpha: 0,
				scale: 3,
				// alpha: 0,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					start: '0%',
					end: '30%'
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

			// sec1_tl.to('.intro-batik', {
			// 	autoAlpha: 0,
			// 	// alpha: 0,
			// 	scrollTrigger: {
			// 		trigger: '.section-1',
			// 		scrub: true,
			// 		start: '0%',
			// 		end: '250%'
			// 	}
			// });

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
					onEnter() {
						sec1_tl.to(splitIntro.lines, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.2 });
					},
					onLeaveBack() {
						sec1_tl.to(splitIntro.lines, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
					},

					onEnterBack() {
						sec1_tl.to(splitIntro.lines, { y: 24, autoAlpha: 1, duration: 0.5, stagger: 0.2 });
					},
					onLeave() {
						sec1_tl.to(splitIntro.lines, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
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
						// sec1_tl.to(splitClient.lines, { y: -24, autoAlpha: 0, duration: 0.01, stagger: 0.001 });
					}
				}
			});

			sec1_tl.to('.slider', {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					markers: false,
					start: '150%',
					end: '260%'
				}
			});


			sec1_tl.to('.header2', {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					markers: false,
					start: '300%'
				}
			});

			sec1_tl.to('.showreel', {
				y: -1000,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					markers: false,
					start: '250%',
					end: '350%'
				}
			});

			sec1_tl.to('.slider', {
				y: -1000,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					markers: false,
					start: '250%',
					end: '350%'
				}
			});

			sec1_tl.to('.header', {
				y: -1000,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					markers: false,
					start: '250%',
					end: '350%'
				}
			});

			sec1_tl.to('.showreel-overlay', {
				y: -1000,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					start: '250%',
					end: '350%'
				}
			});

			sec1_tl.to('.stats-text', {
				autoAlpha: 0,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					start: '350%',
					end: '380%'
				}
			});

			sec1_tl.to('.stats-grid', {
				y: -2000,
				scrollTrigger: {
					trigger: '.section-1',
					scrub: true,
					start: '350%',
					end: '800%'
				}
			});

			sec1_tl.to('.section-1', {
				scrollTrigger: {
					trigger: '.section-1',
					start: '600%',
					end: '700%',
					markers: false,
					onEnter() {
						app.setVariable('1', '1');
					},
					onLeaveBack() {
						app.setVariable('0', '1');
					}
				}
			});

			sec1_tl.to('.section-1', {
				scrollTrigger: {
					trigger: '.section-1',
					start: '700%',
					end: '800%',
					markers: false,
					onEnter() {
						app.setVariable('2', '1');
					},
					onLeaveBack() {
						app.setVariable('1', '1');
					}
				}
			});

			sec1_tl.to('.section-1', {
				scrollTrigger: {
					trigger: '.section-1',
					start: '800%',
					end: '900%',
					markers: false,
					onEnter() {
						app.setVariable('3', '1');
					},
					onLeaveBack() {
						app.setVariable('2', '1');
					}
				}
			});

			sec1_tl.to('.section-1', {
				scrollTrigger: {
					trigger: '.section-1',
					start: '900%',
					end: '1000%',
					markers: false,
					onEnter() {
						app.setVariable('4', '1');
					},
					onLeaveBack() {
						app.setVariable('3', '1');
					}
				}
			});

			sec1_tl.to('.section-1', {
				scrollTrigger: {
					trigger: '.section-1',
					start: '1000%',
					end: '1100%',
					markers: false,
					onEnter() {
						app.setVariable('5', '1');
					},
					onLeaveBack() {
						app.setVariable('4', '1');
					}
				}
			});

			// sec1_tl.to('.section-1', {
			// 	scrollTrigger: {
			// 		trigger: '.section-1',
			// 		start: '1100%',
			// 		end: '1200%',
			// 		markers: false,
			// 		onEnter() {
			// 			app.setVariable('1', '1');
			// 		},
			// 		onLeaveBack() {
			// 			app.setVariable('0', '1');
			// 		}
			// 	}
			// });

			// mlebukmetukke = gsap.fromTo('.mumbul', { y: 0, paused: true }, { y: -30, paused: true });

			// sec1_tl PINNER + MAX DURATION SETTER
			sec1_tl.to('.section-1', {
				// autoAlpha: 1,
				scrollTrigger: {
					trigger: '.section-1',
					pin: true,
					markers: false,
					end: '1100%',
					onUpdate: (x) => {
						console.log(x.progress * 1100)
					}
				}
			});

			// sec2_tl.to('.section-2', {
			// 	scrollTrigger: {
			// 		trigger: '.section-2',
			// 		start: '100%',
			// 		end: '150%',
			// 		onEnter() {
			// 			app.setVariable('2', '2');
			// 		},
			// 	}
			// });

			// sec2_tl.to('.section-2', {
			// 	scrollTrigger: {
			// 		trigger: '.section-2',
			// 		start: '150%',
			// 		end: '200%',
			// 		onEnter() {
			// 			app.setVariable('3', '3');
			// 		},
			// 	}
			// });

			// sec2_tl.to('.section-2', {
			// 	scrollTrigger: {
			// 		trigger: '.section-2',
			// 		start: '200%',
			// 		end: '250%',
			// 		onEnter() {
			// 			app.setVariable('4', '4');
			// 		},
			// 	}
			// });

			// sec2_tl.to('.section-2', {
			// 	scrollTrigger: {
			// 		trigger: '.section-2',
			// 		start: '250%',
			// 		end: '300%',
			// 		onEnter() {
			// 			app.setVariable('5', '5');
			// 		},
			// 	}
			// });

			// // sec2_tl PINNER + MAX DURATION SETTER
			// sec2_tl.to('.section-2', {
			// 	// autoAlpha: 1,
			// 	scrollTrigger: {
			// 		trigger: '.section-2',
			// 		pin: true,
			// 		markers: false,
			// 		end: '300%'
			// 	}
			// });
		});

		// const diumbulkeee = () => {
		// 	// alert("ahhhhhhh");
		// 	gsap.to('.mumbul', { y: 10 });
		// };

		// function diumbulkeeee() {
		// 	// alert("ahhhhhhh");
		// 	gsap.to('.mumbul', { y: 10 });
		// }

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
		let splitClient = new SplitType('.clientx');

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
		gsap.set(splitIntro.lines, { autoAlpha: 0 });
		// gsap.set('.introx', { autoAlpha: 0 });

		gsap.set(splitClient.lines, { autoAlpha: 0 });
		// gsap.set('.stats', { autoAlpha: 0 });
		// gsap.set('.stats', { display: 'none' });
		gsap.set('.slide-1', { autoAlpha: 1, display: "flex" });
		gsap.set('.slide-2', { autoAlpha: 1, display: "block" });
		gsap.set('.slide-3', { autoAlpha: 0, display: "none" });
		gsap.set('.slide-4', { autoAlpha: 0, display: "none" });
		gsap.set('.slide-5', { autoAlpha: 0, display: "none" });
		
		// gsap.set('.grid-item', {rotate: -2})

		// gsap.set('.mask', {
		// 	maskSize: '30vh'
		// });
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

<div class="font-jost">
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

	<!-- <div class="header fixed z-50 invert">
		<div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10">
			<div class="pt-10">
				<img width="48px" src="logo.svg" alt="golo" />
			</div>
			<div class="pt-12">
				<img width="36px" class="dpk-hover float-right" data-hover-bg="#8EE996" data-hover-text="Menu" src="burger.svg" alt="golo" />
			</div>
		</div>
	</div> -->

	<!-- <div class="header2 fixed z-30 opacity-0" style="filter: invert(92%) sepia(9%) saturate(2109%) hue-rotate(61deg) brightness(100%) contrast(83%);">
		<div class="grid grid-cols-2 grid-rows-1 gap-4 pl-10 pr-10">
			<div class="pt-10">
				<img width="48px" src="logo.svg" alt="golo" />
			</div>
			<div class="pt-12">
				<img width="36px" class="float-right" src="burger.svg" alt="golo" />
			</div>
		</div>
	</div> -->

	<!-- <div class="header2 fixed z-[1000] opacity-0" style="filter: invert(92%) sepia(9%) saturate(2109%) hue-rotate(61deg) brightness(100%) contrast(83%);">
		<div class="grid grid-cols-2 grid-rows-1 gap-4">
			<div>
				<div class="pl-10 pt-8">
					<img width="48px" src="logo.svg" alt="golo" />
				</div>
			</div>
			<div>
				<div class="float-right pr-10 pt-7">
					<img width="45px" src="burger.svg" alt="" />
				</div>
			</div>
		</div>
	</div> -->

	<header class="header z-[1000] fixed w-full py-14 px-10 flex justify-between items-center invert">
        <!-- Logo 1 on the left -->
        <div class="flex items-center">
            <img src="logo.svg" alt="Logo 1" class="h-12">
        </div>

        <!-- Logo 2 on the right -->
        <div class="flex items-center">
            <img src="burger.svg" alt="Logo 2" class="h-8 dpk-hover"  data-hover-bg="#8EE996" data-hover-text="Menu">
        </div>
    </header>

	<div class="spacer section-1 flex h-max">
		<div class="slide-1 z-50 flex h-full w-full">
			<div class="mask showreel flex h-full w-full items-center justify-center object-cover text-center mask-size-44 mask-repeat-no-repeat mask-position-center mask-image-[url('/ox.svg')]">
				<!-- <div class="mask mask-repeat-no-repeat mask-position-center mask-size-44 mask-image-[url('/ox.svg')] showreel flex items-center justify-center text-center w-full h-full object-cover"></div> -->
				<video class="h-full w-full object-cover" id="showreel" loop autoplay muted>
					<source src="intro.mp4" type="video/mp4" />
				</video>
				<p class="intro-title font-jost absolute z-10 pb-2 text-center text-7xl font-bold tracking-tight text-white">sampah</p>
				<!-- <div class="sampah absolute z-10"> -->
				<!-- <p class="intro-title text-7xl font-bold tracking-tight text-orange-400 z-10">sampah</p> -->
				<!-- </div> -->

				<!-- <video class="absolute h-full w-full object-cover" autoplay loop muted>
					<source src="intro.mp4" type="video/mp4" />
				</video> -->
			</div>
			<div class="sampah absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 pt-64 text-center">
				<p class="intro-desc font-jost text-4xl font-semibold tracking-tight text-black sm:text-xl md:text-2xl lg:text-xl xl:text-7xl">
					akan menjadi <span style="color: #8EE996;">asset</span> jika diolah dengan benar.
				</p>
			</div>
		</div>
		<div class="slide-2 absolute">
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
		<div class="slide-3 hidden opacity-0 absolute z-50 h-full w-full items-center justify-center text-center">
			<div class="showreel-overlay intro absolute z-50 flex flex-col pt-0 opacity-0">
				<p class="introx font-jost text-7xl font-normal leading-none text-white">Pilah Berkah merupakan</p>
				<p class="introx font-jost text-[330px] font-extrabold leading-none text-white">SARANA</p>
				<p class="introx font-jost mx-80 text-5xl font-light text-white">Untuk mengubah segala jenis sampah Anda menjadi sebuah asset.</p>
				<div class="introx z-50 pt-10">
					<Button variant="outline" class="dpk-hover mx-1 h-16 w-56 rounded-full px-2 text-3xl" data-hover-bg="#8EE996" data-hover-text="↗">Book</Button>
					<Button variant="ghost" class="mx-1 h-16 w-56 rounded-full border-[1px] border-white text-3xl text-white">Showcase</Button>
					<!-- <Button variant="ghost" class="mx-1 rounded-full border-white border-[1px] text-white w-56 h-16 text-3xl">Hubungi</Button> -->
				</div>
			</div>
			<div class="showreel-overlay client z-40 flex flex-col pt-0 opacity-0">
				<p class="clientx font-jost text-7xl font-normal leading-none text-white">Lebih dari</p>
				<p class="clientx font-jost text-[330px] font-extrabold leading-none text-white">5000+</p>
				<p class="clientx font-jost mx-80 text-5xl font-light text-white">Client mempercayakan sampah mereka kepada kami</p>
				<div class="clientx z-0 flex whitespace-nowrap pt-10 font-extrabold">
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
			<img width="64px" class="slider absolute bottom-0 z-50 pb-3 opacity-0" src="bur.svg" alt="golo" />
		</div>

		<div class="slide-4 stats absolute hidden h-full flex-col items-center text-center opacity-0">
			
			<!-- <img class="absolute -z-50 inline w-[64rem]" src="/glow2.svg?v2" alt="golo" /> -->
			<p class="stats-text font-jost z-40 px-32 pt-36 text-[100px] font-normal leading-none text-black">Statistik pencapaian yang terus bertambah setiap harinya</p>
			<div class="stats-grid mt-20 grid w-fit grid-cols-2 grid-rows-2 place-items-center items-center justify-center gap-5 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 text-center shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-lg">
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/1.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">5000<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/2.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">230<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/3.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">534<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/4.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">34<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
			</div>
		</div>

		<div class="slide-5 absolute h-full w-full -z-10 flex-col items-center text-center opacity-0 hidden">
			<img class="absolute right-0 -z-50 inline w-[64rem] opacity-50" src="/glow1.svg" alt="golo" />
			<div class="absolute h-screen w-screen">
				<canvas id="canvas" class="canvas" bind:this={canvas}></canvas>
			</div>

			<header class="header2 z-0 fixed w-full py-14 px-10 flex justify-between items-center" style="filter: invert(92%) sepia(9%) saturate(2109%) hue-rotate(61deg) brightness(100%) contrast(83%);">
				<!-- Logo 1 on the left -->
				<div class="flex items-center">
					<img src="logo.svg" alt="Logo 1" class="h-12">
				</div>
		
				<!-- Logo 2 on the right -->
				<div class="flex items-center">
					<img src="burger.svg" alt="Logo 2" class="h-8">
				</div>
			</header>
			
			<div class="product-1 pb-12 absolute bottom-0 flex justify-center opacity-0">
				<div class="grid w-96 grid-cols-1 grid-rows-1 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-lg">
					<p class="font-jost text-3xl font-normal text-left pb-5 pl-2 flex items-center">
						<img class="inline w-10 mr-3" src="/pendampingan_line.svg" alt="golo" />
						Pendampingan
					  </p>
					<div class="rounded-xl bg-white p-4">
						<p class="font-jost text-lg font-light text-left"><b>Pendampingan</b> personal dalam pengelolaan limbah, untuk solusi praktik terbaik dalam segala hal. Personal dalam pengelolaan limbah, untuk solusi praktik terbaik.</p>
					</div>
				</div>
			</div>

			<div class="product-2 pb-12 absolute bottom-0 flex justify-center opacity-0">
				<div class="grid w-96 grid-cols-1 grid-rows-1 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-lg">
					<p class="font-jost text-3xl font-normal text-left pb-5 pl-2 flex items-center">
						<img class="inline w-10 mr-3" src="/pelatihan_line.svg" alt="golo" />
						Pelatihan
					  </p>
					<div class="rounded-xl bg-white p-4">
						<p class="font-jost text-lg font-light text-left"><b>Pelatihan</b> personal dalam pengelolaan limbah, untuk solusi praktik terbaik dalam segala hal. Personal dalam pengelolaan limbah, untuk solusi praktik terbaik.</p>
					</div>
				</div>
			</div>
			<div class="product-3 pb-12 absolute bottom-0 flex justify-center opacity-0">
				<div class="grid w-96 grid-cols-1 grid-rows-1 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-lg">
					<p class="font-jost text-3xl font-normal text-left pb-5 pl-2 flex items-center">
						<img class="inline w-10 mr-3" src="/standarisasi_line.svg" alt="golo" />
						Standarisasi
					  </p>
					<div class="rounded-xl bg-white p-4">
						<p class="font-jost text-lg font-light text-left"><b>Standarisasi</b> personal dalam pengelolaan limbah, untuk solusi praktik terbaik dalam segala hal. Personal dalam pengelolaan limbah, untuk solusi praktik terbaik.</p>
					</div>
				</div>
			</div>
			<div class="product-4 pb-12 absolute bottom-0 flex justify-center opacity-0">
				<div class="grid w-96 grid-cols-1 grid-rows-1 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-lg">
					<p class="font-jost text-3xl font-normal text-left pb-5 pl-2 flex items-center">
						<img class="inline w-10 mr-3" src="/daurulang_line.svg" alt="golo" />
						Daur Ulang
					  </p>
					<div class="rounded-xl bg-white p-4">
						<p class="font-jost text-lg font-light text-left"><b>Daur Ulang</b> personal dalam pengelolaan limbah, untuk solusi praktik terbaik dalam segala hal. Personal dalam pengelolaan limbah, untuk solusi praktik terbaik.</p>
					</div>
				</div>
			</div>
			<div class="product-5 pb-12 absolute bottom-0 flex justify-center opacity-0">
				<div class="grid w-96 grid-cols-1 grid-rows-1 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-lg">
					<p class="font-jost text-3xl font-normal text-left pb-5 pl-2 flex items-center">
						<img class="inline w-10 mr-3" src="/pengelolaan_line.svg" alt="golo" />
						Pengelolaan
					  </p>
					<div class="rounded-xl bg-white p-4">
						<p class="font-jost text-lg font-light text-left"><b>Pengelolaan</b> personal dalam pengelolaan limbah, untuk solusi praktik terbaik dalam segala hal. Personal dalam pengelolaan limbah, untuk solusi praktik terbaik.</p>
					</div>
				</div>
			</div>
			<!-- <img class="absolute -z-50 inline w-[64rem]" src="/glow2.svg?v2" alt="golo" /> -->
			<!-- <p class="stats-text font-jost z-40 px-32 pt-36 text-[100px] font-normal leading-none text-black">Statistik pencapaian yang terus bertambah setiap harinya</p>
			<div class="stats-grid mt-20 grid w-fit grid-cols-2 grid-rows-2 place-items-center items-center justify-center gap-5 rounded-3xl border-[1px] border-white bg-[#ffffff3d] p-5 text-center shadow-[0px_0px_26px_rgba(0,0,0,0.05)] backdrop-blur-md">
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/1.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">5000<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/2.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">230<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/3.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">534<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
				<div class="rounded-3xl bg-white p-32 shadow-[0px_0px_26px_rgba(0,0,0,0.05)]">
					<img class="inline w-12" src="/4.svg" alt="golo" />
					<p class="font-jost pt-10 text-[30px] font-normal">34<span class="text-[#8EE996]">+</span></p>
					<p class="font-jost text-[30px] font-light">Total Client Fasyankes</p>
				</div>
			</div> -->
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
	<div class="spacer section-2" bind:this={section2}>
		<!-- <div class="flex h-full w-full items-center justify-center object-cover text-center">
			<!== <div class="mask mask-repeat-no-repeat mask-position-center mask-size-44 mask-image-[url('/ox.svg')] showreel flex items-center justify-center text-center w-full h-full object-cover"></div> ==>
			<video class="product h-full w-full object-cover" bind:this={product} controls>
				<source src="product.mp4" type="video/mp4" />
			</video>
		</div> -->

		<p class="font-jost px-32 pt-20 text-[120px] font-normal leading-none text-black">Layanan yang Pilah Berkah tawarkan untuk Anda.</p>
		<div>
			<!-- <div class="vignette-top z-10"></div> -->
			<div class="z-50 h-screen w-screen bg-[#F4F9EF]">
				<img class="absolute right-0 z-0 h-screen" src="/bg.png" alt="emak" />
				<p class=" font-jost px-32 pb-8 pt-32 text-[80px] font-normal leading-none text-black">Dengan <span class="text-[#8EE996]"> 5 layanan unggulan</span> dari kami untuk njenengan</p>
				<div class="grid-container z-50 h-full w-full overflow-hidden whitespace-nowrap py-20" bind:this={gridContainer}>
					<!-- {#each Array.from({ length: 5 }) as _, i}
						<div class="grid-item inline-block" bind:this={gridItem}>
							<img class="w-56 absolute right-36" src="/pelatihan.svg" alt="golo"/>
							<div class="p-10 m-4 w-[500px] h-[500px] bg-white rounded-3xl" >
								{i + 1}
							</div>
						</div>
					{/each} -->
					<!-- <div class="mumbul grid-item z-50 inline-block" role="presentation" on:mouseenter={() => mlebukmetukke.play()} on:mouseleave={() => mlebukmetukke.reverse()}>
						<img class="absolute bottom-20 mb-36 ml-10 w-96" src="/pendampingan.png" alt="golo" />
						<div class="m-4 flex h-[500px] w-[500px] rounded-3xl bg-white p-10">
							<p class="font-jost whitespace-pre-wrap pt-64 text-[35px] font-light"><span class="font-normal">Pendampingan</span> personal dalam pengelolaan limbah, untuk solusi praktik terbaik.</p>
						</div>
					</div>
					<div class="mumbul grid-item inline-block">
						<img class="absolute bottom-20 mb-36 ml-10 w-96" src="/pelatihan.png" alt="golo" />
						<div class="m-4 flex h-[500px] w-[500px] rounded-3xl bg-white p-10">
							<p class="font-jost whitespace-pre-wrap pt-64 text-[35px] font-light"><span class="font-normal">Pelatihan</span> keterampilan dalam pengelolaan limbah lingkungan.</p>
						</div>
					</div>
					<div class="mumbul grid-item inline-block">
						<img class="absolute bottom-20 mb-36 ml-10 w-96" src="/standarisasi.png" alt="golo" />
						<div class="m-4 flex h-[500px] w-[500px] rounded-3xl bg-white p-10">
							<p class="font-jost whitespace-pre-wrap pt-64 text-[35px] font-light"><span class="font-normal">Standarisasi</span> metode baku dalam pengelolaan sampah berkualitas.</p>
						</div>
					</div>
					<div class="mumbul grid-item inline-block">
						<img class="absolute bottom-20 mb-36 ml-10 w-96" src="/daurulang.png" alt="golo" />
						<div class="m-4 flex h-[500px] w-[500px] rounded-3xl bg-white p-10">
							<p class="font-jost whitespace-pre-wrap pt-64 text-[35px] font-light"><span class="font-normal">Daur Ulang</span> memanfaatkan sumber daya secara berkelanjutan.</p>
						</div>
					</div>
					<div class="mumbul grid-item inline-block">
						<img class="absolute bottom-20 mb-36 ml-10 w-96" src="/pengelolaan.png" alt="golo" />
						<div class="m-4 flex h-[500px] w-[500px] rounded-3xl bg-white p-10">
							<p class="font-jost whitespace-pre-wrap pt-64 text-[35px] font-light"><span class="font-normal">Pengelolaan</span> untuk mencapai hasil terbaik secara berkelanjutan.</p>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>

	<div class="spacer section-3"></div>
</div>
