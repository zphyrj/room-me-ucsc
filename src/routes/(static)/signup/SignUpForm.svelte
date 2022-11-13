<script>
  import { getFirestore, setDoc, doc } from 'firebase/firestore'
  import { userData } from '../../../stores/userData';
  import {goto} from '$app/navigation';
  import {app} from '../../../firebase';
  const db = getFirestore(app)
  $: if ($userData.signedUp !== false) {
    console.log("redirecting to home", $userData.signedUp);
    goto('/');
  }
  async function submit(event) {
    // get entries from form
    const form = event.target;
    const entries = new FormData(form);
    const data = Object.fromEntries(entries);
    data.onCampus = data.onCampus === "on";
    data.year = parseInt(data.year);
    if (!majors.includes(data.major)) {
      // mark major as invalid
      console.log("invalid major");
      form.elements.major.setCustomValidity("Please select one of the listed majors");
      return;
    }
    if (!colleges.includes(data.college)) {
      // mark college as invalid
      console.log("invalid college");
      form.elements.college.setCustomValidity("Please select one of the listed colleges");
      return;
    }
    setDoc(doc(db, "users", $userData.uid), data)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  }
  function getOptionsArray(options) {
    return Array.from(options).map(option => option.value);
  }
  /** @type {HTMLDataListElement} */
  let majorsList, collegeList;
  /** @type {Array<String>}*/
  $: majors = majorsList? getOptionsArray(majorsList.options): undefined;
  $: colleges = collegeList? getOptionsArray(collegeList.options): undefined;
  /**
   * 
   * @param {InputEvent} event
   */
  function validateMajor(event) {
    const major = event.target.value;
    if (
      majors.includes(major) || 
      !event.target.validationMessage ||
      major === ""
    ) {
        event.target.setCustomValidity("");
    }
  }
  function validateCollege(event) {
    const college = event.target.value;
    if (
      colleges.includes(college) || 
      !event.target.validationMessage ||
      college === ""
    ) {
        event.target.setCustomValidity("");
    }
  }
  let majorInput, collegeInput;
</script>

<form class="quiz-container" on:submit|preventDefault={submit}>
  <label>What is your major?
    <div>
        <datalist bind:this={majorsList} id="majors" >
          <option>Agroecology</option>
          <option>Anthropology</option>
          <option>Applied Physics</option>
          <option>Applied Linguistics and Multilingualism</option>
          <option>Applied Mathematics</option>
          <option>Art</option>
          <option>Art and Design: Games and Playable Media</option>
          <option>Biochemistry and Molecular Biology</option>
          <option>Biology</option>
          <option>Biotechnology</option>
          <option>Biomolecular Engineering and Bioinformatics</option>
          <option>Business Management Economics</option>
          <option>Chemistry</option>
          <option>Classical Studies</option>
          <option>Cognitive Science</option>
          <option>Community Studies</option>
          <option>Computer Engineering</option>
          <option>Computer Science</option>
          <option>Computer Science: Computer Game Design </option>
          <option>Critical Race and Ethnic Studies</option>
          <option>Earth Sciences</option>
          <option>Ecology and Evolution</option>
          <option>Economics</option>
          <option>Education, Democracy, and Justice</option>
          <option>Electrical Engineering</option>
          <option>Environmental Sciences</option>
          <option>Feminist Studies</option>
          <option>Film and Digital Media</option>
          <option>Global Economics </option>
          <option>Human Biology</option>
          <option>History</option>
          <option>History of Art and Visual Culture</option>
          <option>Jewish Studies</option>
          <option>Language Studies</option>
          <option>Latin American and Latino Studies</option>
          <option>Legal Studies</option>
          <option>Linguistics</option>
          <option>Literature</option>
          <option>Marine Biology</option>
          <option>Mathematics</option>
          <option>Mathematics Education</option>
          <option>Molecular, Cell, and Developmental Biology</option>
          <option>Music</option>
          <option>Network and Digital Technology</option>
          <option>Neuroscience</option>
          <option>Philosophy</option>
          <option>Physics</option>
          <option>Astrophysics</option>
          <option>Plant Sciences</option>
          <option>Politics</option>
          <option>Psychology</option>
          <option>Robotics Engineering</option>
          <option>Science Education</option>
          <option>Sociology</option>
          <option>Spanish Studies</option>
          <option>Technology and Information Management</option>
          <option>Theater Arts</option>
          <option>Undeclared</option>
          <option>Earth Sciences/Anthropology</option>
          <option>Environmental Studies/Biology</option>
          <option>Environmental Studies/Earth Sciences</option>
          <option>Environmental Studies/Economics</option>
          <option>Economics/Mathematics</option>
          <option>Latin American and Latino Studies/Politics</option>
          <option>Latin American and Latino Studies/Sociology</option>
        </datalist>
        <input bind:this={majorInput} name='major' on:input={validateMajor} autocomplete="on" list="majors"/>
        {#if majorInput && majorInput.validationMessage !== ""}
          <p class="error">{majorInput.validationMessage}</p>
        {/if}
    </div>
  </label>
  
   <label>Do you plan to live on or off campus?
      <div>
          <label>
            <input type="radio" name="onCampus" value='on' />
            On Campus
          </label>
          <label>
            <input type="radio" name="onCampus" value='off' />
            Off Campus
          </label>
    </div>
  </label>

  <label>Which college are you in?                            
    <div>
      <datalist bind:this={collegeList} id="college">
        <option>Cowell</option>
        <option>Stevenson</option>
        <option>Crown</option>
        <option>Merill</option>
        <option>Nine</option>
        <option>John R. Lewis</option>
        <option>Porter</option>
        <option>Kresge</option>
        <option>Rachel Carson</option>
        <option>Oakes</option>
        <option>Family Student Housing</option>
        <option>Redwood Grove</option>
        <option>The Village</option>
      </datalist>
        <input name='college' bind:this={collegeInput} autocomplete="on" list="college"/>
    </div>
  </label>

  <label>What are your pronouns?                           
    <div>
      <datalist id="pronouns">
        <option>she/her</option>
        <option>he/him</option>
        <option>they/them</option>
      </datalist>
        <input name='pronouns' autocomplete="on" list="pronouns"/>
    </div>
  </label>
  <label>
    What year are you?
    <input type="number" name="year" min="1" max="5" />
  </label>
  <div class="span-1-3">
    <button type="submit">Submit</button>
  </div>
</form>