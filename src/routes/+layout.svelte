<script>
  import { app } from "../firebase" // import firebase app
  import { getAuth, onAuthStateChanged } from "firebase/auth"
  import AccountButton from "../components/AccountButton.svelte";
  const auth = getAuth(app)
</script>

<nav>
  <a href="/" class="logo">
    <img src="./favicon.png" style="width: 50px" alt="">
  </a>
  <div class="spacer" />
  <a href="/about">About</a>
  <a href="/faq">FAQ</a>
  <AccountButton />
</nav>
<main>
  <slot />
</main>

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    margin: .25rem;
  }

  nav > .spacer {
    width: 100%;
    padding: 0;
  }

  nav > * {
    padding: .5em;
    text-decoration: none;
    font-size: 1.3em;
    font-weight: bold;
    color: var(--orange);
    white-space: pre;
  }

  @media screen and (min-width: 700px) {
    nav {
      margin: 1em;
    }
    nav > * {
      padding: 1em;
    }
  }

  .logo {
    float: left;
    font-size: 1.3em;
    color: var(--forest);
  }
  .logo > img {
    aspect-ratio: 1;
  }
  :global {
    html,
    body {
      scroll-behavior: smooth;
      font-family: "Inter", sans-serif;
      --forest: #41bc63;
      --tan: #f1e8da;
      --lime: #779119;
      --brown: rgb(127, 90, 74);
      --orange: rgb(207, 139, 67);
      --mint: rgb(143, 187, 148);
      --forest: rgb(94, 148, 64);

    }
    html {
      background-color: var(--tan);
    }
    /* default colors for elements */

    h3 {
      color: var(--forest);
    }

    h1 {
      color: var(--forest);
    }
    
    h2 {
      color: var(--orange);
    }

    p {
      color: var(--brown);
    }

    a {
      text-decoration: none;
    }

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

    @media only screen and (max-width: 600px) {
      .container {
        flex-direction: column;
      }
      .left-side {
        margin-left: 2em;
      }
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
  }
</style>
