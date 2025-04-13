<script lang="ts">
	import { Button } from "$lib/components/ui/button/index";
	import * as Card from "$lib/components/ui/card/index";
	import { CarTaxiFront } from "lucide-react";
    import Separator from "$lib/components/ui/separator/separator.svelte";

    let { data } = $props();

    const formatDate = (dateString: string) => {
        const dateObject: Date = new Date(Date.parse(dateString));
        let returnString: string = `${dateObject.getMonth() + 1}/${dateObject.getUTCDate()}`

        return returnString;
    };
</script>
<div class="flex flex-col justify-center items-center">
<h1 class="bold text-2xl">Upcoming Shows</h1>
<Separator class="max-w-[400px] my-2"/>
<ul class="max-w-[400px] w-[400px] flex flex-col justify-center align-top">
    {#each data.events as event}
    <li class="mb-4">
        <Card.Root>
            <Card.Header class="flex flex-row justify-between">
                <div>
                    <Card.Title>
                        {event.location}
                    </Card.Title>
                    <Card.Description>
                        {event.city}, {event.state}
                    </Card.Description>
                </div>
                <div>
                    <p>{formatDate(event.date)}</p>
                </div>
            </Card.Header>
            <Card.Content>
                <p>{event.event_title}</p>
                <p>{event.address}</p>

            </Card.Content>
            <Card.Footer class="flex justify-end">
                <Button href={event.ticket_link}>
                    {#if event.ticket_price == null}
                        Free
                    {:else}
                        Tickets ${event.ticket_price}
                    {/if}
                </Button>
            </Card.Footer>
        </Card.Root>
    </li>
    {/each}
</ul>
</div>