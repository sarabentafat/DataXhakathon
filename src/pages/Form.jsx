import React, { useState } from 'react'
import styles from '../style/style'


function Test() {
    function cancelAll() {
        setName('');
        setDiscordID('');
        setEmail('');
        setPhone('');
        setInstitution('');
        setAcademicLevel('');
        setHaveTeam(false);
        setTeamName('');
        setTeamMembers('');
        setCvLink('');
        setSkills('');
        setGithubLink('');
        setLinkedinLink('');
        setParticipatedBefore(false);
        setExperience('');
        setMotivation('');
        setAdd('');
      }
      
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [discordID, setDiscordID] = useState('');
    const [phone, setPhone] = useState('');
    const [institution, setInstitution] = useState('');
    const [academicLevel, setAcademicLevel] = useState('');
    const [haveTeam, setHaveTeam] = useState(false);
    const [teamName, setTeamName] = useState('')
    const [teamMembers,setTeamMembers]=useState('');
    const [cvLink,setCvLink]=useState('')
    const [linkedinLink,setLinkedinLink]=useState('');
    const [githubLink,setGithubLink]=useState('');
    const [skills,setSkills]=useState('');
    const [participatedBefore,setParticipatedBefore]=useState(false)
    const [experience,setExperience]=useState('');
    const [motivation,setMotivation]=useState('');
    const [add,setAdd]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name,age);
        const data = {
            Name: name,
            Phone: phone,
            Email: email,
            DiscordID: discordID,
            Institution: institution,
            AcademicLevel: academicLevel,
            HaveTeam: haveTeam,
            TeamName: teamName,
            TeamMembers:teamMembers,
            CvLink:cvLink,
            LinkedinLink:linkedinLink,
            GithubLink:githubLink,
            Skills:skills,
            ParticipatedBefore:participatedBefore,
            Experience:experience,
            Motivation:motivation,
            Add:add

        }
        fetch('https://sheet.best/api/sheets/6d013908-20d3-4aa7-80e8-69791b214db5', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                cancelAll();

            })
            .catch(error => console.error(error));

    }
    return (
        <div className=' relative z-10 bg-formi  sm:bg-form bg-cover '>
        <div className={`${styles.padding} `}>
            <div className='mt-16'>
                <h1 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A9D1] to-[#009861] '>Hello and welcome , everyone</h1>
                <p className='text-[20px]'>SOAI is back with another event !</p>
            </div>
        <div>
        </div>
            <form  onSubmit={handleSubmit}
                className='  text-white mx-5'
            >
                <fieldset className='mt-10 bg-bgColor bg-transparent'>
                    <div className=' flex justify-center items-center'>
                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-l from-[#019967]  to-opacity-4'>
                        </span>   <legend className='text-white font-bold mr-1'>Personal Informations</legend>
                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-r from-[#019967]  to-opacity-4'>    </span>
                    </div>
                    <div className='md:flex '>
                        <div className='w-full flex-1 md:mr-16
                        '>

                            <label className='font-bold text-form'
                            for='name'
                            > Your Full Name
                            </label>
                            <input
                            id='name'
                             required
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="text"
                                value={name}
                                placeholder='sara ben'
                                name="Full_Name"
                                onChange={(e) => setName(e.target.value)}
                               
                            />
                            <label className='font-bold text-form' for='discord'> Discord ID
                            </label>

                            <input
                            id='discord'
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                placeholder='Sara Bentafat#3345'
                                type="text"
                                value={discordID}
                                name="Discord_ID"
                                onChange={(e) => setDiscordID(e.target.value)}
                                required
                            />

                            <div>
                                <label className='font-bold text-form'
                                for='institution'>
                                    Institution </label>

                                <input
                                id='institution'
                                    className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                    type="text"
                                    value={institution}
                                    name="Institution"
                                    placeholder=' ESTIN..'
                                    onChange={(e) => setInstitution(e.target.value)}
                                    required

                                />
                            </div>
                        </div>
                        <div className='w-full flex-1  md:ml-16'>
                            <label className='font-bold text-form'>
                                Email address
                            </label>
                            <input
                            placeholder='s_bentafat@estin.dz'
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="email"
                                name='Email_Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required

                            />

                            <label className='font-bold text-form'>
                                Phone number
                            </label>
                            <br />
                            <input
                            placeholder='05555555'
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="tel"
                                value={phone}
                                name='Phone_Number'
                                onChange={(e) => setPhone(e.target.value)}
                                required

                            />
                            <div className='my-2'>
                                <label className='font-bold text-form'>
                                    Academic level
                                </label>
                                <br />
                                <input
                                placeholder='1cs'
                                    className=' mb-3text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                    type="text"
                                    value={academicLevel}
                                    name='academic_level '
                                    onChange={(e) => setAcademicLevel(e.target.value)}
                                    required
                                />
                            </div>



                        </div>

                    </div>


                </fieldset>
                <fieldset className='mt-10' >
                    <div className=' flex justify-center items-center'>

                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-l from-[#019967]  to-opacity-4'>
                        </span>   <legend className='text-white font-bold mr-1'>About Your Team</legend>
                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-r from-[#019967]  to-opacity-4'>    </span>
                    </div>

                    <div className='md:flex '>
                        <div className='w-full flex-1 md:mr-16
                        '>

                            <label className='font-bold text-form'> Do you have a team ?
                            </label>

                            <select name="team" id=""
                                onChange={(e) => setHaveTeam(e.target.value)}
                                required
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'>   
                                <option value="false">no</option>
                                <option value="true">yes</option>
                            </select>


                        </div>
                        <div className='w-full flex-1  md:ml-16'>
                            <label className='font-bold text-form'>
                                Team name
                            </label>
                            <input
                            placeholder='...'
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="text"
                                name='team_name'
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                required

                            />
                        </div>

                    </div>

                    <label className='font-bold text-form '>
                        Team Memebers 
                        <p className='mb-2 text-[#8B8B8B] text-sm opacity-50 font-meduim'>each team must contain 4 memebers at max</p>
                    </label>
                    <textarea
                        className='h-[100px] mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none lowercase  focus:border-green-500'
                        type="text"
                        name='teammemeber'
                        value={teamMembers}
                        placeholder=' NAME ALL TEAM MEMBERS INCLUDING YOURSELF'
                        required
                        onChange={(e) => setTeamMembers(e.target.value)}

                    />


                </fieldset>
                <fieldset className='mt-10' >
                    <div className=' flex justify-center items-center'>

                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-l from-[#019967]  to-opacity-4'>
                        </span>   <legend className='text-white font-bold mr-1'>Links</legend>
                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-r from-[#019967]  to-opacity-4'>    </span>
                    </div>

                    <div className='md:flex '>
                        <div className='w-full flex-1 md:mr-16       '>
                            <label className='font-bold text-form'>CV Link
                            </label>
                            <input
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="url"
                                value={cvLink}
                                placeholder='https://'
                                name="cv_link"
                                onChange={(e) => setCvLink(e.target.value)}
                            
                            />
                            <label className='font-bold text-form'> Linkedin Link
                            </label>

                            <input
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                placeholder='https://'
                                type="url"
                                value={linkedinLink}
                                name="Linkedin_link"
                                onChange={(e) => setLinkedinLink(e.target.value)}
                               
                            />
                        </div>
                        <div className='w-full flex-1  md:ml-16'>
                            <label className='font-bold text-form'>
                               Github Link
                            </label>
                            <input
                              placeholder='https://'
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="url"
                                name='githubLink'
                                value={githubLink}
                                onChange={(e) => setGithubLink(e.target.value)}
                            />

                        </div>

                    </div>


                </fieldset>
                <fieldset className='mt-10' >
                    <div className=' flex justify-center items-center'>

                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-l from-[#019967]  to-opacity-4'>
                        </span>   <legend className='text-white font-bold mr-1'>Skills & experiences</legend>
                        <span className='w-[12%] mr-1 h-1 bg-gradient-to-r from-[#019967]  to-opacity-4'>    </span>
                    </div>

                    <div className='md:flex '>
                        <div className='w-full flex-1 md:mr-16'>
                            <label className='font-bold text-form'> What are your skills?
                            </label>

                            <input
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="text"
                                value={skills}
                                placeholder='. . .'
                                name="skills"
                                onChange={(e) => setSkills(e.target.value)}
                                 required

                            />
                            <label className='font-bold text-form'>
                            Have you ever participated in a Datathon before?
                            </label>

                            <select name="participatedBefore" id=""
                            value={participatedBefore}
                                onChange={(e) => setParticipatedBefore(e.target.value)}
                                required
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'>
                                <option value="true">yes</option>
                                <option value="false">no</option>                          
                            </select>


                        </div>
                        <div className='w-full flex-1  md:ml-16'>
                        <label className='font-bold text-form'>How was your experience?
                            </label>

                            <input
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                placeholder='. . .'
                                type="text"
                                value={experience}
                                name="experience"
                                onChange={(e) => setExperience(e.target.value)}
                                required
                            />

                            <label className='font-bold text-form'>
                            What motivates you to participate in this datathone
                            </label>
                            <br />
                            <input
                             placeholder='. . .'
                                className='mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none  focus:border-green-500'
                                type="text"
                                value={motivation}
                                name='motivation'
                                onChange={(e) => setMotivation(e.target.value)}
                                required
                            />
                        </div>

                    </div>

                    <label className='font-bold text-form '>
                    Anything to add ?

                    </label>
                    <textarea
                        className='h-[100px] mb-3 text-sm p-2 w-full bg-[#343557] leading-tight  focus:border-[1px]  rounded   focus:outline-none lowercase  focus:border-green-500'
                        type="text"
                        name='anthToAdd'
                        value={add}
                        placeholder='....'
                       
                        onChange={(e) => setAdd(e.target.value)}

                    />


                </fieldset>
                <div className='flex mt-1 '>
                <button className='flex-1 mr-16 p-1 border-2 border-[#01A8C9] border-gradient-to-r from-[#019B72] rounded-md font-bold '
                onClick={ cancelAll}
                >Cancel</button>
                <div className='flex-1  p-1 border-2 border-[#01A8C9] rounded-md font-bold '>
                <button type='submit'
                 className='bg-[#01A8C9] bg-gradient-to-r from-[#019B72] p-1 w-full rounded-md'  
                >register </button>
                </div>

              
                </div>
                



            </form>
        </div>
        
        </div>
    )
}

export default Test

