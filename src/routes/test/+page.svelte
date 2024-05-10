<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  
	let gridItems;
  
	onMount(() => {
	  gsap.registerPlugin(ScrollTrigger);
  
	  const container = document.querySelector('.grid-container');
	  const totalWidth = gridItems.length * (gridItems[0].offsetWidth + 20); // 20px for margin
  
	  gsap.to(container, {
		width: totalWidth,
		ease: 'none',
		scrollTrigger: {
		  trigger: container,
		  start: 'top top',
		  end: () => `+=${totalWidth}`,
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
	  overflow-x: scroll;
	  overflow-y: hidden;
	  white-space: nowrap;
	  display: flex;
	  justify-content: center;
	  padding-top: 20px;
	}
  
	.grid-item {
	  width: 300px;
	  height: 200px;
	  margin-right: 20px;
	}
  </style>
  
  <div class="grid-container">
	{#each Array.from({ length: 10 }) as _, i}
	  <div class="grid-item bg-gray-300" bind:this={gridItems}>
		{i + 1}
	  </div>
	{/each}
  </div>