
"use client"

import React, { useState,useEffect } from 'react'
import "./signup1.css"
import { useRouter } from 'next/navigation'

const page = () => {
    const router =useRouter();
    const [data4,setdata4]=useState(JSON.parse(localStorage.getItem("datauserdetails")))

      console.log(data4,"juiopp")
      
    const p = {
    year: "",
    timejob: "",
    cname: "",
    rname: ""
    }

    const [data, setdata] = useState(data4.experience)
    const [data1, setdata1] = useState(data4.skills)

    const [userdetails, setuserDetails] = useState(data4.userbio)

    const addalluserdetail = {
        userbio: {},
        experience: [],
        skills: []
    }

    const adduserdetail = (e) => {
        setuserDetails({ ...userdetails, [e.target.name]: e.target.value })
    }

    const addexperienceuser = () => {
        setdata([...data, p])
    }
    // console.log(userdetails)

    const addexperienceuserdetail = (e, a) => {
        const x = data.map((c, id) => id == a ? { ...c, [e.target.name]: e.target.value } : c)
        setdata(x)
    }
    const addSkills = (e) => {

        const x = data1.map((c) => c.a == e.target.name ? { ...c, check: e.target.checked } : c)
        setdata1(x)
    }



    const addall = () => {
        addalluserdetail.userbio = userdetails
        addalluserdetail.experience = data
        addalluserdetail.skills = data1
        console.log(addalluserdetail, "ioioi")
        window.localStorage.setItem("datauserdetails", JSON.stringify(addalluserdetail))
        router.push("/about")
    }
    //console.log(addalluserdetail,"kkkkkkkkk")

    const findtruefalse = (b) => {
        const x = data1.filter((c) => c.a == b)
        console.log(x, "ffff")
        const p = (x[0])?.check;
        return p
    }
    findtruefalse("React")
    return (
        <>
            <>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label htmlFor="image">
                    <b>Photo</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter image url...."
                    name="imageurl"
                    id="imageurl"
                    required=""
                    value={userdetails.imageurl}
                    onChange={(e) => adduserdetail(e)}
                />
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required=""
                    value={userdetails.email}
                    onChange={(e) => adduserdetail(e)}
                />

                <label htmlFor="Name">
                    <b>Name</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    id="name"
                    required=""
                    value={userdetails.name}
                    onChange={(e) => adduserdetail(e)}
                />
                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="password"
                    required=""
                    value={userdetails.password}
                    onChange={(e) => adduserdetail(e)}
                />
                <label htmlFor="psw-repeat">
                    <b>Phone number</b>
                </label>
                <input
                    type="text"
                    placeholder="Phone number ...."
                    name="phone"
                    id="phone"
                    value={userdetails.phone}
                    required=""
                    onChange={(e) => adduserdetail(e)}
                />
                <label htmlFor="psw-repeat">
                    <b>About</b>
                </label>
                <textarea
                    type="text"
                    placeholder="about ..."
                    name="about"
                    id="about"
                    value={userdetails.about}
                    onChange={(e) => adduserdetail(e)}
                    required=""
                />
                <label htmlFor="psw-repeat">
                    <b>Professional Details</b>
                </label>
                <textarea
                    type="text"
                    placeholder="Professional Details ..."
                    name="Professional"
                    id="Professional"
                    value={userdetails.Professional}
                    required=""
                    onChange={(e) => adduserdetail(e)}
                />
                <div style={{ marginTop: 8, marginBottom: 8 }}>
                    <label htmlFor="psw-repeat">
                        <b>Skills</b>

                    </label>
                    <br></br>
                    <label>React</label>
                    <input type="checkbox" name="React" checked={findtruefalse("React")} onChange={(e) => addSkills(e)} />
                    <br></br>
                    <label>Nextjs</label>
                    <input type="checkbox" name="Nextjs" checked={findtruefalse("Nextjs")}  onChange={(e) => addSkills(e)}/>
                    <br></br>
                    <label>Typescript</label>
                    <input type="checkbox" name="Typescript" checked={findtruefalse("Typescript")} onChange={(e) => addSkills(e)}/>
                    <br></br>
                    <label>Html</label>
                    <input type="checkbox" name="Html"  checked={findtruefalse("Html")}onChange={(e) => addSkills(e)}/>
                    <br></br>
                    <label>Nodejs</label>
                    <input type="checkbox" name="Nodejs" checked={findtruefalse("Nodejs")} onChange={(e) => addSkills(e)}/>
                    <br></br>
                    <label>mongodb</label>
                    <input type="checkbox" name="mongodb" checked={findtruefalse("mongodb")} onChange={(e) => addSkills(e)}/>
                </div>

                <div>
                    <label htmlFor="psw-repeat">
                        <b>Qualification</b>
                    </label>
                    <input
                        type="text"
                        placeholder="college name ...."
                        name="collegename"
                        value={userdetails.collegename}
                        id="collegename"
                        required=""
                        onChange={(e) => adduserdetail(e)}
                    />
                    <input type="text" name="collegeyear" onChange={(e) => adduserdetail(e)} placeholder='start year and  end year example (2000 2014) like ...'   value={userdetails.collegeyear}
                       />
                    <label htmlFor="psw-repeat">
                        <b>Degree name</b>
                    </label>
                    <input type="text" name="degreename" onChange={(e) => adduserdetail(e)} placeholder='Degree name example btech...'  value={userdetails.degreename}
                       />
                    <textarea type="text" onChange={(e) => adduserdetail(e)} name="aboutqualifiaction" placeholder='about  qualification ...' value={userdetails.aboutqualifiaction}></textarea>


                </div>


                {data && data.map((c, id) => {
                    return (
                        <>
                            <div>
                                <label htmlFor="psw-repeat">
                                    <b>Experience</b>
                                </label>
                                <input
                                    type="text"
                                    placeholder="year ...."
                                    name="year"
                                    id="year"
                                    required=""
                                    value={c?.year}
                                    onChange={(e) => addexperienceuserdetail(e, id)}
                                />
                                <input type="text"  value={c?.timejob} name="timejob" placeholder='time  of job  example intern ya full time' onChange={(e) => addexperienceuserdetail(e, id)}
                                />
                                <label htmlFor="psw-repeat">
                                    <b>Company Name</b>
                                </label>
                                <input type="text" name="cname"  value={c?.cname} placeholder='Comapny Name ...' onChange={(e) => addexperienceuserdetail(e, id)}
                                />
                                <input type="text" name="rname" value={c?.rname} placeholder='role in job ...' onChange={(e) => addexperienceuserdetail(e, id)}
                                />

                            </div>




                        </>
                    )
                })}

                <button className='registerbtn' onClick={() => addexperienceuser()} >Add more Experience</button>

                <hr />
                <button type="submit" className="registerbtn" onClick={() => addall()}>
                    Register
                </button>
            </>

        </>
    )
}

export default page
