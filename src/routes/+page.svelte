<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import * as Menubar from '$lib/components/ui/menubar';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	export let data: PageData;

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
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
			autoAlpha: 0.9,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '50%',
				end: '100%'
			}
		});

		sec1_tl.from('.solusi', {
			autoAlpha: 0.9,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '100%',
				end: '150%'
			}
		});

		sec1_tl.to('.client', {
			autoAlpha: 0.9,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '150%',
				end: '200%'
			}
		});

		sec1_tl.from('.client', {
			autoAlpha: 0.9,
			// alpha: 0,
			scrollTrigger: {
				trigger: '.section-1',
				scrub: true,
				start: '200%',
				end: '250%'
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

		gsap.set('.solusi', { autoAlpha: 0 });
		gsap.set('.client', { autoAlpha: 0 });
		gsap.set('.mambu', { y: 190 });
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
		<div class="fixed z-0 flex h-screen">
			<div
				class="sampah absolute left-1/2 top-[49%] z-10 -translate-x-1/2 -translate-y-1/2 transform"
			>
				<p class="text-7xl font-bold text-white">sampah</p>
			</div>
			<div class="mask z-0">
				<video class="w-screen object-cover" id="showreel" loop autoplay muted>
					<source src="intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div
				class="sampah absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform pt-72 text-center"
			>
				<p class="text-7xl font-bold text-black">merupakan asset jika anda mengolahnya.</p>
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
			<div class="flex whitespace-nowrap font-extrabold pt-1">
				<div class="who-marquee-reverse who inline-block text-black">
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="flex whitespace-nowrap font-extrabold pt-1">
				<div class="who-marquee who inline-block text-black">
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="flex whitespace-nowrap font-extrabold pt-1">
				<div class="who-marquee-reverse who inline-block text-black">
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
				</div>
			</div>
			<div class="flex whitespace-nowrap font-extrabold pt-1">
				<div class="who-marquee who inline-block text-black">
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
					<img class="inline" width="360px" src="pattern.svg" alt="golo" />
				</div>
			</div>
		</div>
		<div
			class="solusi absolute z-50 flex flex-col items-center justify-center pt-0 text-center opacity-0"
		>
			<p class="font-futura text-7xl font-normal leading-none text-white">Menghadirkan solusi</p>
			<p class="font-futura text-[300px] font-extrabold leading-none text-white">ONE-STOP</p>
			<p class="font-futura mx-80 text-5xl font-light text-white">
				Our intuitive interface makes it easy to navigate and find what you need.
			</p>
		</div>
		<div
			class="client absolute z-50 flex flex-col items-center justify-center pt-0 text-center opacity-0"
		>
			<p class="font-futura text-7xl font-normal leading-none text-white">Client</p>
			<p class="font-futura text-[300px] font-extrabold leading-none text-white">Sopowae</p>
			<p class="font-futura mx-80 text-5xl font-light text-white">
				Our intuitive interface makes it easy to navigate and find what you need.
			</p>
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
