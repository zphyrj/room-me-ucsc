<script>
	import GButton from "../../../components/gButton.svelte";
	import { goto } from '$app/navigation';
	function login() {
		console.log("login");
	}
</script>

<div class="login">
  <div class="text">
    <h1> Log In</h1>
    <GButton on:login={login}></GButton>
  </div>
  <div class="img">
    <img id="side-img" alt="" src="images/login.png">
  </div>
</div>

<style>
.login {
	display: flex;
	max-width: 700px;
	background: var(--orange);
	margin: auto;
	margin-top: 5rem;
}
.login > * {
  flex: 1;
}

.login .img {
  background-color: #dfcebe;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login .text {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  margin: 2rem;
}

.login h1 {
	color: var(--tan);
	margin-top: 0;
}

@media screen and (max-width: 700px) {
	.login {
    flex-direction: column-reverse;
		width: 100%;
		height: 100%;
		margin: 0;
	}
}

#side-img {
	width: 100%;
	max-width: 400px;
	aspect-ratio: 4 / 3;
}
</style>