<script>
  import { userData } from "../stores/userData";
  import {goto} from '$app/navigation';
  import {onMount} from 'svelte';
	import ProfileCard from "../components/ProfileCard.svelte";
  $: if ($userData.signedUp === false) {
    console.log("redirecting to signup", $userData.signedUp);
    goto('/signup', {replace: true});
  }
  let users = [
    {
      displayName: "John Doe",
      major: "Computer Science",
      year: 1,
      college: "Crown",
      onCampus: true,
      pronouns: "he/him",
      liked: false,
      bio: "I like to play video games and watch anime.",
    },
    {
      displayName: "Jane Doe",
      major: "Computer Science",
      year: 2,
      college: "College 9",
      onCampus: true,
      pronouns: "she/her",
      liked: false,
      bio: "I like to play video games and watch anime.",
    },
    {
      displayName: "Joni Doe",
      major: "Computer Science",
      year: 1,
      college: "College 10",
      onCampus: true,
      pronouns: "they/them",
      liked: false,
      bio: "I like to play video games and watch anime.",
    }
  ]
  let friends = [
    {
      displayName: "Julia Roberts",
      major: "Computer Science",
      year: 2,
      college: "Crown",
      onCampus: true,
      pronouns: "he/him",
      liked: true,
      bio: "I like to play video games and watch anime.",
    },
    {
      displayName: "Dwane Johnson",
      major: "Computer Science",
      year: 1,
      college: "College 9",
      onCampus: true,
      pronouns: "she/her",
      liked: true,
      bio: "I like to play video games and watch anime.",
    },
    {
      displayName: "Emma D'Arcy",
      major: "Computer Science",
      year: 4,
      college: "College 10",
      onCampus: true,
      pronouns: "they/them",
      liked: true,
      bio: "I like to play video games and watch anime.",
    }
  ]
</script>

<h1>Hi {$userData.displayName.split(' ')[0]}!</h1>
<div class="center">
  <ProfileCard class='center' user={$userData}></ProfileCard>
</div>
<h2>Friend Requests</h2>
<div class="profiles">
  {#each users as user}
    <ProfileCard user={user}></ProfileCard>
  {/each}
</div>
<h2>Friends</h2>
<div class="profiles">
  {#each friends as user}
    <ProfileCard user={user}></ProfileCard>
  {/each}
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
  }
  .profiles {
    display: flex;
    overflow-x: auto;
    padding: 1rem;
  }
  :global(.profiles > *) {
    margin-left: 1rem;
  }
</style>