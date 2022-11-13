<script>
  import { onMount } from 'svelte';
  import GButton from '../../../components/gButton.svelte';
  import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
  import { goto } from '$app/navigation';
  import { userData } from '../../../stores/userData';
	import SignUpForm from './SignUpForm.svelte';
  const authFB = getAuth();
</script>

<svelte:head>
  <title>{'Sign Up | Room-Me'}</title>
</svelte:head>

<section class="sign-up">
  <h1>Create Your Account</h1>
  <div class="form">
    {#if $userData === null}
      <p>Sign in with your UCSC email to continue.</p>
      <GButton/>
      {:else if $userData !== undefined}
      <SignUpForm></SignUpForm>
      {/if}
  </div>
</section>

<style>
  .sign-up {
    padding: 1rem;
  }

  .btn {
    width: 400px;
    margin: auto;
  }
  h1 {
    color: var(--black);
    font-size: 2em;
    text-align: center;
  }
</style>
