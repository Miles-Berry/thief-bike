<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";

    let { event } = $props();

    const formatDate = (dateString: string) => {
        const dateObject: Date = new Date(Date.parse(dateString));
        let returnString: string = `${dateObject.getMonth() + 1}/${dateObject.getUTCDate()}`

        return returnString;
    };
</script>

<Card.Root class="pb-6">
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
	<!--
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
    -->
</Card.Root>
