<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
  const dispatch = createEventDispatcher();
  const authFB = getAuth();
  const signIn = (credential) => {
    credential = GoogleAuthProvider.credential(credential)
      signInWithCredential(authFB, credential).then(({ user }) => {
      console.log("firebase: user signed in!", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
      dispatch('login', response)
    })
  }
  function handleCredentialResponse(response) {
    signIn(response.credential)
  }
  onMount(()=> {
    google.accounts.id.initialize({
      client_id: "470168848519-eqj2tflsgqluedd3ks7fgrm3t1cq7psf.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    })
    google.accounts.id.renderButton(
      button,
      {theme: "outline", size: "large", shape: "rectangular", width: 400, logo_alignment: "center"} // customization attributes
    )
    // google.accounts.id.prompt() // also display the One Tap dialog
  })
  let button;
</script>

<div>
  <div bind:this={button}/>
</div>