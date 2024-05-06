<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		//   const circleMask = document.querySelector('.circle-mask');
		//   const video = document.querySelector('.video-container');
		// const tl = gsap.timeline();
		// tl.to('.video-container', {
		//     clipPath: "inset(0% 0% 0% 0%)",
		// 	scrollTrigger: {
		// 		trigger: '.section',
		// 		start: '0%',
		// 		end: '100%',
		// 		scrub: true,
		//         markers: true
		// 	},
		// });
		// tl.fromTo('.video-container', {
		//     clipPath: "inset(45% 40% 45% 40% round 100px)",
		// 	scrollTrigger: {
		// 		trigger: '.section',
		// 		start: '0%',
		// 		end: '100%',
		// 		scrub: true,
		//         markers: true
		// 	},
		// },
		// {
		//     clipPath: "inset(0% 0% 0% 0% round 0px)",
		// 	scrollTrigger: {
		// 		trigger: '.section',
		// 		start: '0%',
		// 		end: '100%',
		// 		scrub: true,
		//         markers: true
		// 	},
		// });
		// tl.to('.section', {
		// 	// autoAlpha: 1,
		// 	scrollTrigger: {
		// 		trigger: '.section',
		// 		pin: true,
		// 		markers: false,
		// 		end: '300%'
		// 	}
		// });
		// tl.set('.video-container', {
		//     clipPath: "inset(45% 40% 45% 40% round 100px)",
		// });
	});
</script>

<div class="spacer section relative overflow-hidden">
	<!-- <div class="circle-mask absolute bottom-0 left-0 right-0 top-0 z-10 m-auto h-24 w-24 rounded-full" style="transform: scale(1);"></div> -->
	<div class="video-container absolute left-0 top-0 h-full w-full">
		<!-- Video element -->
		<div class="vignette"></div>
		<video class="cont h-full w-full object-cover" autoplay loop muted>
			<source src="intro.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
</div>

<style>
	.cont {
		/* clip-path: circle(12rem at center); */
		/* clip-path: inset(45% 40% 45% 40% round 100px); */
		box-shadow: 1200px 1200px 1200px rgb(255, 255, 255) inset;
		/* filter: blur(12px) */
	}

	.vignette {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 0 100px 100px rgba(255, 255, 255) inset;
	}
</style>
