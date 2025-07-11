<script lang="ts">
	import { Button } from "$lib/components/ui/button/index";
	import * as Card from "$lib/components/ui/card/index";
	import { CarTaxiFront } from "lucide-react";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Event from "$lib/components/events/event.svelte";

    let { data } = $props();

    const formatDate = (dateString: string) => {
        const dateObject: Date = new Date(Date.parse(dateString));
        let returnString: string = `${dateObject.getMonth() + 1}/${dateObject.getUTCDate()}`

        return returnString;
    };

    const isDateTodayOrLater = ( dateString: string): boolean => {
        const [year, month, day] = dateString.split("-").map(Number);
        const inputDate = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return inputDate >= today;
    }
</script>

<div class="flex flex-col items-center justify-start">
    <div class="text-left w-[400px]">
        <h1 class="bold text-2xl">Upcoming Shows</h1>
    </div>
    <Separator class="max-w-[400px] my-2"/>
    <ul class="max-w-[400px] w-[400px] flex flex-col justify-center align-top">
        {#each data.events as event}
            {#if isDateTodayOrLater(event.date)}
                <li class="mb-4">
                    <Event event={event} />
                </li>
            {/if}
        {/each}
    </ul>

    <h1 class="bold text-2xl">Listen Now</h1>
    <Separator class="max-w-[400px] my-2"/>
</div>