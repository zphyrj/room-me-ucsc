<script>
  import { userData } from '../stores/userData'
  import { signOut, getAuth } from 'firebase/auth';
	import { goto } from '$app/navigation';
  const auth = getAuth();
  function logout() {
    signOut(auth).then(() => {
      goto('/');
    });
  }
</script>

<a href='/login'>
  {#if $userData === undefined}
  <button disabled class='login-btn'>Loading...</button>
  {:else if $userData === null}
    <a class='login-btn' href='/login'>Login</a>
    {:else}
    <button class='login-btn' on:click={logout}>Logout</button>
    {/if}
  </a>
  <p>
  </p>

  
<style>
.login-btn {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: var(--lime);
  background-color: transparent;
  border: 2px solid var(--lime);
  padding: 11px 18px 8px 18px;
  border-radius: 7px;
  display: inline-block;
  transition: background-color 0.15s ease-in;
  cursor: pointer;
}
.login-btn:disabled {
  background-color: var(--tan);
  color: gray;
  border-color: gray;
  cursor: not-allowed;
}
</style>