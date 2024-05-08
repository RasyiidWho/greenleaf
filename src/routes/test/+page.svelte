<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  
	onMount(() => {
	  gsap.registerPlugin(ScrollTrigger);
  
	  const container = document.querySelector('.grid-container');
	  const items = document.querySelectorAll('.grid-item');
  
	  gsap.to(items, {
		xPercent: -100 * (items.length - 1),
		ease: 'none',
		scrollTrigger: {
		  trigger: container,
		  start: 'top top',
		  end: () => `+=${container.offsetWidth}`,
		  scrub: true,
		  pin: true,
		  invalidateOnRefresh: true,
		},
	  });
	});
  </script>
  
  <style>
	.grid-container {
	  width: 100%;
	  overflow-x: hidden;
	  overflow-y: hidden;
	  white-space: nowrap;
	}
  
	.grid-item {
	  display: inline-block;
	  width: 300px;
	  height: 200px;
	  margin-right: 20px;
	}
  </style>
  
  <div class="grid-container">
	{#each Array.from({ length: 10 }) as _, i}
	  <div class="grid-item bg-gray-300">
		{i + 1}
	  </div>
	{/each}
  </div>
  