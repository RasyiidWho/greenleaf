<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


	let product;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// SECTION 2
		const sec2_tl = gsap.timeline();

		product.currentTime = 0;

		sec2_tl.to(product, {
			// currentTime: product.duration,
			scrollTrigger: {
				trigger: '.section-2',
				start: '0%',
				end: '10000%',
				scrub: true,
				markers: true,
				onUpdate: (self) => {
						// const scrollPos = self.progress;
						// const videoDuration = product.duration;
						// const videoCurrentTime = videoDuration * scrollPos;
						// if (videoCurrentTime) {
						// 	product.currentTime = videoCurrentTime;
						// }
						console.log("self.progress", self.progress * 18)
						console.log("video.currentTime", product.currentTime)
						product.currentTime = self.progress * 18;
				}
			}
		});

		// sec2_tl PINNER + MAX DURATION SETTER
		sec2_tl.to('.section-2', {
			// autoAlpha: 1,
			scrollTrigger: {
				trigger: '.section-2',
				pin: true,
				markers: false,
				end: '10000%'
			}
		});
	});
</script>

<div class="spacer section-2">
	<div class="flex h-full w-full items-center justify-center object-cover text-center">
		<!-- <div class="mask mask-repeat-no-repeat mask-position-center mask-size-44 mask-image-[url('/ox.svg')] showreel flex items-center justify-center text-center w-full h-full object-cover"></div> -->
		<video class="product h-full w-full object-cover" bind:this={product} controls>
			<source src="hooh.mov" type="video/mp4" />
		</video>
	</div>
</div>
