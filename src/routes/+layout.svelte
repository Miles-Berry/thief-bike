<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";

	import Sun from "@lucide/svelte/icons/sun";
  	import Moon from "@lucide/svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
  	import { Button } from "$lib/components/ui/button/index.js";

	let { children } = $props();
</script>

<div class="flex text-4xl text-center justify-center p-4 align-middle">
	<h1>Bike Thief</h1>
</div>
<div class="px-4 py-0 m-0">
	<Separator />
</div>
<div class="p-4">
	{@render children?.()}
</div>
<div class="flex justify-end items-center fixed bottom-0 right-0 m-4">
	<Button onclick={toggleMode} variant="outline" size="icon">
		<Sun
		  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
		  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</Button>
</div>

<ModeWatcher />

