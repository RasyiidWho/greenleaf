<script>
	import '../app.pcss';
	import '$lib/assets/global.css';
	import dpkCursor from '$lib/dpkCursor';
	import { Svrollbar } from 'svrollbar';
	import { onMount } from 'svelte';

	let isDesktop = false;

	// Check if the user is on a desktop
	onMount(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		isDesktop = window.innerWidth >= 1024;
		
		if(isDesktop) {
			const customCursor = new dpkCursor({ ease: 0.11 });
			console.log(window.innerWidth)
		}
	});




</script>

<!-- <ScrollArea class="h-auto rounded-md border">

</ScrollArea> -->
{#if isDesktop}
<Svrollbar />
{/if}

<slot />
