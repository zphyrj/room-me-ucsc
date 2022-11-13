<script>
  const images = {
    "he/him": "images/man.png",
    "she/her": "images/woman.png",
    other: "images/nonbinary.png",
  }
  export let user
  console.log(user)
  const img = images[user.pronouns] || images["other"]
</script>

<div class="card">
  <figure>
    <img class="circular" src={img} alt="Profile"/>
  </figure>
  <h
    >{user.displayName}:
    <button class="likeBtn"
      ><img
        alt="heart"
        class="likeimg"
        src={user.liked?"images/heart-filled.svg":"images/heart.svg"}
        width="20px"
        title="heart icons"
      /></button
    ></h
  >
  <p>Year {user.year}</p>
  <p>Major: {user.major}</p>
  <p>Pronouns: {user.pronouns}</p>
  {#if user.bio}
    <div class="bio">
      <p>Bio:</p>
      <p>{user.bio}</p>
    </div>
  {/if}
</div>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    text-align: center;
    resize: vertical;
    padding: .5rem;
    flex-shrink: 0;
  }
  .circular {
    width: 200px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: white;
  }

  .likeimg {
    height: 20px;
  }

  .bio {
    text-align: left;
  }
</style>
