<script>
	import { Button } from "$lib/components/ui/button/index";
	import * as Card from "$lib/components/ui/card/index";

    let { data } = $props();
</script>

<ul>
    {#each data.band_members as band_member}
    <li>
        <Card.Root>
            <Card.Header>
                <Card.Title>
                    {band_member.name}
                </Card.Title>
                <Card.Description>
                    {band_member.primary_instrument}
                </Card.Description>
            </Card.Header>
            <Card.Content>
                {band_member.email}
            </Card.Content>
            <Card.Footer>
                <Button href="https://google.com">
                    Tickets
                </Button>
            </Card.Footer>
        </Card.Root>
    </li>
    {/each}
</ul>