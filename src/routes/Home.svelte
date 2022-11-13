<script>
  import { userData } from "../stores/userData";
  import { browser } from '$app/environment';
  import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
  const authFB = getAuth();
  const signIn = (credential) => {
    credential = GoogleAuthProvider.credential(credential)
    signInWithCredential(authFB, credential).then(({ user }) => {
      console.log("firebase: user signed in!", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    })
  }
  function handleCredentialResponse(response) {
    signIn(response.credential)
  }
  // check if not ssr
  $: if (browser && $userData == null) {
    google.accounts.id.initialize({
      client_id: "470168848519-eqj2tflsgqluedd3ks7fgrm3t1cq7psf.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    })
    google.accounts.id.prompt();
  }
</script>

<section id="home-page">
  <div class="container">
    <div class="left-side">
      <h1 id="homeTitle">Room-Me</h1>
      <h2>Find your perfect roommate.</h2>
      <p id="homeDesc">
        Searching for a roommate at UCSC has never been easier. With Room-Me,
        you'll fill out a quick questionnaire and be matched with a roommate in
        seconds. Join us today!
      </p>
      <a href="/signup" id="getStartedButton">Get Started</a>
    </div>
    <img src="images/home-hero.png" alt="heroimg" id='heroimg' />
  </div>
</section>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-side {
    /*color: rgb(48, 124, 90);*/
    margin-top: 1em;
    margin-left: 10em;
    margin-right: 2em;
  }

  #heroimg {
    width: 50%;
    margin-top: 4em;
    margin-right: 4em;
    margin-left: -1em;
    margin-bottom: 3em;
    aspect-ratio: 4 / 3;
    animation: bounce 2s infinite alternate;
  }

  @media only screen and (max-width: 700px) {
    .container {
      flex-direction: column-reverse;
    }

    .left-side {
      margin-left: 2em;
    }

    #heroimg {
      width: 80%;
      height: 80;
      margin: auto;
    }
  }

  #homeTitle {
    margin-bottom: 0.5em;
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }

  #homeDesc {
    font-size: 1em;
  }
  #getStartedButton {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: var(--tan);
    border: 2px solid var(--lime);
    background-color: var(--lime);
    margin-top: 2em;
    margin-bottom: 25px;
    padding: 11px 18px 8px 18px;
    border-radius: 7px;
    display: inline-block;
    transition: background-color 0.15s ease-in;
  }

  #getStartedButton:hover {
    background-color: var(--tan);
    color: var(--lime);
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
</style>
