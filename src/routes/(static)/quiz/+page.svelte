<h1 id="create-acc-title">Questionnaire</h1>
<p id="create-desc">Fill out the following fields.</p>

<div class="quiz-box">
<!--   beginning of form -->
      <form class="quiz-container">
    <label>What is your major?
      <div>
          <datalist id="majors" >
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
          <input autocomplete="on" list="majors"/>
      </div>
          </label>
    
     <label>Do you plan to live on or off campus?
        <div>
          <datalist id="location">
            <option>On campus</option>
            <option>Off campus</option>
          </datalist>
          <input autocomplete="on" list="location"/>
      </div>
    </label>
    
     <label>How do you feel about guests?
        <div>
          <datalist id="guests">
            <option>Fine, but must ask.</option>
            <option>No guets are allowed.</option>
            <option>Great, I love guests.</option>
            <option>I have no opinion.</option>
          </datalist>
          <input autocomplete="on" list="guests"/>
       </div>
    </label>

    <label>What is your noise level?
        <div>
          <datalist id="noise">
            <option>Silence.</option>
            <option>Loud.</option>
            <option>Some noise is okay.</option>
            <option>I have no opinion.</option>
          </datalist>
          <input autocomplete="on" list="noise"/>
       </div>
    </label>

    <label>What are your hobbies?
        <div>
          <datalist id="hobbies">
            <option>Sports</option>
            <option>Art</option>
            <option>Crocheting</option>
            <option>Baking</option>
            <option>Cooking</option>
            <option>Dance</option>
            <option>Video Games</option>
            <option>Board Games</option>
            <option>Singing</option>
            <option>Shopping</option>
            <option>Music</option>
            <option>Playing Instruments</option>
            <option>Scrapbooking</option>
            <option>Watching TV</option>
            <option>Filming</option>
            <option>Journaling</option>
            <option>Volunteering</option>
            <option>Exercising</option>
            <option>Writing</option>
            <option>Hiking</option>
            <option>Crafting</option>
          </datalist>
          <input autocomplete="on" list="hobbies"/>
       </div>
    </label>

    <label>What college do you want to live in?
      <div>
        <datalist id="college">
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
          <input autocomplete="on" list="college"/>
      </div>
    </label>
    <div class="span-1-3">
              <a href="quiz.html" id="nextButton">Next</a>
          </div>
  </form>
 </div>

<style>
    html, body {
  scroll-behavior:smooth;
	font-family: 'Inter', sans-serif;
	--forest: #41BC63;
	--tan: #F1E8DA;
	--lime: #9EB155;
	--orange: #EC700A;
	--mint: #C5DFCD;
}

    html {
    background-color: var(--tan);
    }

    h1 {
    color: var(--orange);
    text-align: center;
    }

    p {
    color: var(--lime);
    text-align: center;
    }

    .quiz-box {
    background-color: #C5DFCD;
    margin: auto;
    border-radius: 25px;
        max-width: 700px;
        width: 70%;
        padding: 2rem;
    }

    .quiz-container {
    clear:left;
    text-align:left;
    padding-right:10px;
    justify-content: center;
    position: relative;
    display: grid;
        grid-template-columns: 1fr 1fr;
    border: none;
    top: 1rem;
    font-size: 15px;
    }

    .quiz-container > * {
        margin: 2rem;
        display: flex;
        flex-direction: column;
    border: none;
    }

    .span-1-3 {
        grid-column: 1 / 3;
    }

    #nextButton {
        font-weight: bold;
        text-decoration: none;
        color: var(--tan);
        border: 2px solid var(--lime);
        background-color: var(--lime);
        padding: 8px 18px;
        border-radius: 7px;
        display: inline-block;
        transition: background-color 0.15s ease-in;
        text-align: center;
    }

    #nextButton:hover {
        background-color: var(--tan);
        color: var(--lime);
    }
</style>