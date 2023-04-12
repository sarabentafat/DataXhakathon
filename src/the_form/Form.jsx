import React, { useState } from 'react';
import './Form.css'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discordID, setDiscordID] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');
  const [hasTeam, setHasTeam] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamMember1, setTeamMember1] = useState('');
  const [teamMember2, setTeamMember2] = useState('');
  const [teamMember3, setTeamMember3] = useState('');
  const [teamMember4, setTeamMember4] = useState('');
  const [cvLink, setCvLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [skills, setSkills] = useState('');
  const [participated, setParticipated] = useState('');
  const [experience, setExperience] = useState('');
  const [motivation, setMotivation] = useState('');
  const [additional, setAdditional] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxabduI4QpXU9hqeN1k9c0GDoZJ8o_fpC8Mb_jdNv6HA6ERoKLMQT4EhEN-3u5aDcE9Ng/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleCancel = () => {
    setCvLink('');
    setGithubLink('');
    setLinkedinLink('');
    setSkills('');
    setParticipated('');
    setExperience('');
    setMotivation('');
    setAdditional('');
    setName('');
    setEmail('');
    setAcademicLevel('');
    setDiscordID('');
    setInstitution('');
    setHasTeam('');
    setTeamName('');
    setTeamMember1('');
    setTeamMember2('');
    setTeamMember3('');
    setTeamMember4('');
    setPhone('');
    
   
  };

  return (
    <>
    <div class="hmlk">
      <header>
        <div id='toFix'></div>
        <h1>Hello and welcome , everyone</h1>
        <p id="Soai">SOAI is back with another event !</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Informations</legend>            
            <div class="divv">
              <div>
             <label>
              Your full name    <sup>*</sup>
              <input
                type="text"
                value={name}
                name="Full_Name"
                onChange={(e) => setName(e.target.value)}
                pattern="^[A-Za-z]{3,}\s[A-Za-z]{3,}$"
                required
              />
            </label>
            </div>
            <div>
            <label>
              Email address <sup>*</sup>
              <input
                type="email"
                name='Email_Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            </div>
            </div>
            <div class="divv">
            <label>
              Discord ID <sup>*</sup>
              <input
                type="text"
                value={discordID}
                name="Discord_ID"
                onChange={(e) => setDiscordID(e.target.value)}
                pattern="[0-9a-zA-Z]{6,32}"
                title="Please enter a valid Discord ID (6-32 alphanumeric characters)"
                required
              />
            </label>
            <label>
              Phone number <sup>*</sup>
              <input
                type="tel"
                value={phone}
                name='Phone_Number'
                onChange={(e) => setPhone(e.target.value)}
               
                required
              />
            </label>
            </div>
            <div class="divv">
            <label>
              Institution <sup>*</sup>
              <input
                type="text"
                value={institution}
                name="Institution"
                placeholder=' ESTIN..'
                onChange={(e) => setInstitution(e.target.value)}
                required
              />
            </label>
            <label>
              Academic level <sup>*</sup>
              <select
                value={academicLevel}
                name="Academic_level"
                onChange={(e) => setAcademicLevel(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option value="1CP">1CP</option>
                <option value="2CP">2CP</option>
                <option value="1CS">1CS</option>
                <option value="2CS">2CS</option>
                <option value="3CS">3CS</option>
              </select>
            </label>
            </div>
            
          </fieldset>
          <fieldset>
            <legend>About your team</legend>
            <div class="divv">
            <label>
              Do you have a team? <sup>*</sup>
              <select name="Has_Team" value={hasTeam}  onChange={(e) => setHasTeam(e.target.value)}>
                <option value="" disabled>Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            </div>
            {hasTeam === "Yes" ? (
            <>  
               <div class="divv">
                <label>
                  Team name <sup>*</sup>
                  <input type="text" name="team_Name" value={teamName}  onChange={(e) => setTeamName(e.target.value)} required />
                </label>
                </div>
                <div class="divv">                
                <label>
                  Team members    <sup>*</sup>  <sub>( EACH TEAM MUST CONTAIN 4 MEMBERS AT MAX )</sub>         
                  <div class="container">
                  <input 
                    placeholder=' Leader *'
                    type="text"
                    name="Leader"
                    value={teamMember1}
                    onChange={(e) => setTeamMember1(e.target.value)}    
                    pattern="^[A-Za-z]{3,}\s[A-Za-z]{3,}$"                
                    required
                  />
                  <input
                    placeholder=' 2nd Member *'
                    type="text"
                    name="Member_2"
                    value={teamMember2}
                    onChange={(e) => setTeamMember2(e.target.value)}
                    pattern="^[A-Za-z]{3,}\s[A-Za-z]{3,}$"
                    required
                  />
                  
                  <input
                    placeholder=' 3rd Member'
                    type="text"
                    name="Member_3"
                    value={teamMember3}
                    onChange={(e) => setTeamMember3(e.target.value)}
                    pattern="^[A-Za-z]{3,}\s[A-Za-z]{3,}$"
                   
                  />
                  <input
                   placeholder=' 4th Member'
                    type="text"
                    name="Member_4"
                    value={teamMember4}
                    onChange={(e) => setTeamMember4(e.target.value)}
                    pattern="^[A-Za-z]{3,}\s[A-Za-z]{3,}$"
                   
                  />
                  </div>
                  
                </label>
                </div>
             </>
               ) :hasTeam === "No" ? (<div class="divv"><p> <mark>Note : </mark> Members without a team will be selected randomly to form teams of 4 members </p></div>

               ):null } 
               
                
          </fieldset>
          <fieldset>
        <legend>Links</legend>
        <div class="divv">
        <label>
          CV Link <sup>*</sup>
          <input
            type="text"
            placeholder=" https://"
            name="CV_Link"
            value={cvLink}
            onChange={(event) => setCvLink(event.target.value)}
            pattern='^(https?://)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\/\S*)?$'
            required
          />
        </label>
        <label>
          Github Link 
          <input
            type="text"
            placeholder=" https://"
            name="Github_Link"
            value={githubLink}
            onChange={(event) => setGithubLink(event.target.value)}
            pattern='^(https?://)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\/\S*)?$'
          />
        </label>
        </div>
        <div class="divv">
        <label>
          Linkedin Link
          <input
            type="text"
            placeholder="https://"
            name='Linkedin_Link'
            value={linkedinLink}
            onChange={(event) => setLinkedinLink(event.target.value)}
            pattern='^(https?://)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\/\S*)?$'
          />
        </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Skills &amp; experiences</legend>
        <div class="divv">
        <label>
          What are your skills? <sup>*</sup>
          <input
            placeholder=' Ex: Data Science , AI '
            type="text"
            name='Skills'
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
            required
          />
        </label>
        </div>
        <div class="divv">
        <label >
          Have you ever participated in a Datathon before? <sup>*</sup>
          <select name='Had_Participated_in_a_datathon' value={participated} onChange={(event) => setParticipated(event.target.value)} required>
          <option value="" disabled>Please select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        </div>
        <div class="divv">
        <label>
          How was your experience?
          <input
            placeholder=' Ex: Good.. '
            type="text"
            name='Experience_rate'
            value={experience} onChange={(event) => setExperience(event.target.value)}
          />
        </label>
        </div>
        <div class="divv">
        <label id="moti">
          What motivates you to participate in this datathon? <sup>*</sup>
          <textarea name='Motivation' value={motivation} onChange={(event) => setMotivation(event.target.value)} required></textarea>
        </label>
        </div>
        <div class="divv">
        <label>
          Anything to add?
          <textarea name='Addition' value={additional} onChange={(event) => setAdditional(event.target.value)}></textarea>
        </label>
        </div>
      </fieldset>      
      <div class="button-container">  
        <button class="cancel-button" type='button' onClick={handleCancel}>Cancel</button>
        <button class="submit-button" type='submit'>Register</button>
      </div>
        </form>
      </main>
      </div>
    </>
   
  );
}

export default App;
