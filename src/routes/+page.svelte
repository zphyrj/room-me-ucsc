<script>
	import Home from "./Home.svelte";
  import { userData } from "../stores/userData";
	import Dashboard from "./Dashboard.svelte";
  import {browser} from '$app/environment';
  $: user = $userData
</script>

<svelte:head>
  <title>{'Home | Room-Me'}</title>
</svelte:head>
{#if user === null || !browser}
<Home/>
{:else if user !== undefined}
  <Dashboard></Dashboard>
{/if}