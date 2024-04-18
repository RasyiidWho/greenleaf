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

		sec1_tl.to('.mask1', {
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
			duration: 500,
			ease: 'none'
		});

		gsap.to('.who-marquee-reverse', {
			repeat: -1,
			xPercent: -50,
			duration: 500,
			ease: 'none'
		});
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
		<div class="grid grid-cols-2 grid-rows-1 gap-4 pl-6 pr-6">
			<div class="w-60 pt-6">
				<img src="logo.svg" alt="golo" />
			</div>
			<div class="pt-8">
				<img width="36px" class="float-right" src="burger.svg" alt="golo" />
			</div>
		</div>
	</div>

	<div class="spacer section-1 flex items-center justify-center">
		<!-- <div class="absolute pt-0 solusix opacity-100 z-50 flex flex-col items-center justify-center text-center">
			<p class="text-7xl leading-none font-normal text-white font-futura">Menghadirkan solusi</p>
			<p class="text-[300px] leading-none font-extrabold text-white font-futura">ONE-STOP</p>
			<p class="text-5xl font-light text-white font-futura mx-80">Our intuitive interface makes it easy to navigate and find what you need.</p>
		</div> -->
		<div class="absolute">
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
			</div>
			<div class="whitespace-nowrap font-extrabold">
				<div class="who-marquee-reverse inline-block who text-black opacity-5">
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
		</div>
		<div class="absolute pt-0 solusi opacity-0 z-50 flex flex-col items-center justify-center text-center">
			<p class="text-7xl leading-none font-normal text-white font-futura">Menghadirkan solusi</p>
			<p class="text-[300px] leading-none font-extrabold text-white font-futura">ONE-STOP</p>
			<p class="text-5xl font-light text-white font-futura mx-80">Our intuitive interface makes it easy to navigate and find what you need.</p>
		</div>
		<div class="absolute pt-0 client opacity-0 z-50 flex flex-col items-center justify-center text-center">
			<p class="text-7xl leading-none font-normal text-white font-futura">Client</p>
			<p class="text-[300px] leading-none font-extrabold text-white font-futura">Sopowae</p>
			<p class="text-5xl font-light text-white font-futura mx-80">Our intuitive interface makes it easy to navigate and find what you need.</p>
		</div>
		<div class="z-0 flex h-screen fixed">
			<div class="mask1">
				<img src="bg.jpg" alt="Your" class="w-screen object-fill" />
				<!-- <video class="object-cover h-screen" id="showreel" loop  autoplay muted>
					<source src="intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video> -->
			</div>
		</div>
	</div>
	<div class="spacer section-2">b</div>
</div>
