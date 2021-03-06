import React, {useState, useEffect, useRef} from 'react'
import "./tripdoodler.css"
import "../projectStyle.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import Footer from "../Footer/footer"
import ScrollArrow from '../ScrollArrow'


var solution = require('./TripSolution.png')
var solution2 = require('./TripSolution3.png')
var video = require('../../TripVid.mp4')
var figma = require('./Figma.PNG')
var userflow = require('./UserFlow.png')
var logo = require('../HomePage/EFlogoWhite.png')
var process = require('./TripProcess.png')
var usm = require('./TripUSM.png')
var flow = require('./TripFlow.png')
var sketch = require('./TripSketch.png')


const TripDoodler = () =>{

    const scrollToRef = (ref) => window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'     
    })   
    
      
        const descRef = useRef(null)
        const executeScroll = () => {scrollToRef(descRef)}

    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectCourse = () =>{

        history.push("/coursearch");
        console.log("clicked")
      }

      const RedirectTripDoodler = () =>{

        history.push("/tripdoodler");
        console.log("clicked")
      }
      const RedirectNearby = () =>{

        history.push("/nearby");
        console.log("clicked")
      }
      const RedirectKollin = () =>{

        history.push("/kollin");
        console.log("clicked")
      }
      const RedirectFlight = () =>{

        history.push("/flight");
        console.log("clicked")
      }
      const RedirectIkea = () =>{

        history.push("/ikea");
        console.log("clicked")
      }


    return(
        <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(22 22 22)', height:'5%'}}>
          <a class="navbar-brand" onClick={()=> RedirectBack()}><img src={logo} style={{height:'40px'}}></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectBack()} style={{color:'#ffffff'}}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectTripDoodler()} style={{color:'#ffffff'}}>Tripdoodler</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectCourse()} style={{color:'#ffffff'}}>Coursearch</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectNearby()} style={{color:'#ffffff'}}>NearBy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectKollin()} style={{color:'#ffffff'}}>Kollin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectFlight()} style={{color:'#ffffff'}}>KTH Flight Tool</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectIkea()} style={{color:'#ffffff'}}>Ikea Assembly</a>
              </li>
            </ul>
          </div>
        </nav>
            <div className="page">

                <div className="box">
                <div className="headlineBox">
                    <div className="arrowDiv">
                        <i className="fas fa-chevron-left" onClick={()=>{RedirectIkea()}} ></i>
                        <p>Previous project</p>
                        </div>
                        <div className="headline">
                        Tripdoodler
                        </div>
                        <div className="arrowDiv">
                        <i className="fas fa-chevron-right" onClick={()=>{RedirectCourse()}}></i>
                        <p>Next project</p>
                        </div>
                    </div>
                        <div className="words">
                            <div>
                                Mobile application for travellers to collect, plan, share and rate travels with their community based on sustainability parameters
                            </div>
                            
                        </div>
                        <div className="arrowDown">

                        <i onClick={()=>{executeScroll()}} class="fas fa-chevron-down"></i>

                        </div>
                       
                </div>
                
                <div className="projectContent">
                {/*
                <div className="mediaDiv">

                         <div className="centervideodiv">
                            <video className="Tripvideo" muted loop controls>
                                <source src={video} type="video/mp4"></source>
                            </video>
                        </div>

                </div>*/}
                
                    <div className="descriptionDiv" ref={descRef}>




                        <div className="infoIcons"> 
                        
                            <div className="infoDivHead">
                                <p style={{fontSize:'15px'}}>UX DESIGN PROTOTYPING</p>
                                <p className="projectName">Tripdoodler App</p>
                            </div>
                            <div className="infoDivButtons">
                                <a href="https://www.figma.com/proto/6fIwnmAAley0iGVa4oK2Jl/UX-project-tripDoodler?node-id=750%3A675&scaling=scale-down" target="_blank">
                                    <button className="projectButton">PROTOTYPE</button>
                                </a>
                                <a href="https://www.figma.com/proto/6fIwnmAAley0iGVa4oK2Jl/UX-project-tripDoodler?node-id=716%3A0&scaling=min-zoom" target="_blank">
                                    <button className="projectButton">LANDING PAGE</button>
                                </a>

                            </div>
                            <div className="infoDiv">
                                <i className="fas fa-user-tag"></i>
                                <p>Designer</p>
                            </div>
                            <div className="infoDiv">
                                <i className="fas fa-users"></i>
                                <p>4</p>
                            </div>
                            <div className="infoDiv">
                                <i className="fas fa-wrench"></i>
                                <p>Figma, Lean Canvas, User Story Map, Micro Interactions, User Validation</p>
                            </div>
                            <div className="infoDiv">
                                

                                <p>This project was part of a UX-design prototyping course at DTU, and was carried out in collaboration with <a className="aHrefLink" href="https://tripdoodler.com/" target="_blank">Tripdoodler</a>, a startup company for sustainable travel planning. </p>

                               
                            </div>

                        </div>



                <div className="projectDesc">
                    PROJECT DESCRIPTION
                </div>
                <div className="projectText">
                    Tripdoodler is developing a planning travel tool with a sustainable focus that enables travelers to collect, 
                    plan, and share travel with their community. By rethinking what travel planning is, their goal is to create 
                    a new global standard that will change the travel industry where sustainability is a natural part of all future travel choices. 
                </div>
                <div className="projectText">
                    Our team was given the assignment to create the UX and UI for:
                    <div className=""> 

                    </div>
                    <ul>
                        <li>Post-travel user-driven rating of experiences based on set sustainability parameters</li>
                        <li>Sharing past travel plans with friends in TripDoodler.</li>
                        <li>Search in the TripDoodler community for trip ideas from friends or travelers you follow based on sustainability and/or regular travel parameters</li>
                    </ul>
                </div>
                <div className="projectDesc">
                    PROBLEM
                </div>
                <div className="projectText">
                    <ul>
                    <li>There is no existing solution for rating sustainable travel experiences on the TripDoodler platform</li>
                    <li>It is difficult to interpret ratings, and travelers can’t trust ratings of travels/parts of travels when they are based only on personal experiences of unknown people</li>
                    <li>TripDoodlers existing platform does not support mobile use</li>
                    </ul>
                </div>

                <div className="projectDesc">
                    DESIGN PROCESS
                </div>
                <div className="projectText">
                    {/*
                    <div className="designProcess">

                        <div class="designProcessCard">
                           <i id="processIcon" class="fas fa-search"></i>
                            <div class="designProcessContainer">
                                <p>Discover</p>
                            </div>
                        </div>
                      
                        <div className="designProcessCard">
                        <i id="processIcon" class="far fa-lightbulb"></i>
                        <div class="designProcessContainer">
                                <p>Ideation</p>
                            </div>
                        </div>
                        <div className="designProcessCard">
                        <i id="processIcon" class="fas fa-pencil-alt"></i>
                        <div class="designProcessContainer">
                                <p>Sketching</p>
                            </div>
                        </div>
                        <div className="designProcessCard">
                        <i id="processIcon" class="fas fa-tools"></i>
                        <div class="designProcessContainer">
                                <p>Prototyping</p>
                            </div>
                        </div>
                        <div className="designProcessCard">
                        <i id="processIcon" class="fas fa-mobile-alt"></i>
                        <div class="designProcessContainer">
                                <p>User testing</p>
                            </div>
                        </div>
                    </div>
                    */}
                    <img className="processImg" src={process}></img>
                    <div>
                        In order to understand the problem from the client’s point of view, we met with the CEO over an online, semi-structured interview. From the interview it was clear that the core problem Tripdoodler had was how to design the rating of travels, and how they should be shared in a user’s community. The web platform that was under construction did not yet have such functionalities.  Some questions that arose were:
                    </div>
                    <ul>
                    <li>What is sustainable travel? What does Tripdoodler define as sustainable?</li>
                    <li>How can the sustainable ratings of travels be user-driven, yet reliable?</li> 
                    <li>How can we incorporate trust in the ratings, so that they function as inspiration for more sustainable travel choices?</li>
                    <li>How can we make users of Tripdoodler make sustainable choices when they are already on a trip?</li>
                    </ul>

                    <div>
                        We began the ideation process by creating a first user flow of how the user's should navigate through the application. 
                        
                    </div>
                    <div><img className="processImg" src={flow}></img>
                    </div>
                    <div>
                    Because of time constraints,  we chose to work with fast, iterative UX-prototyping, focusing on creating an MVP. Instead of spending much more time on researching the problem we began to sketch initial ideas as low-fi wireframes in Figma. 
                    <img className="processImg" src={sketch}></img>
                    </div>
                </div>

                <div className="projectText">
                Through iterative user testing, we gained insights on how to iterate on the design and the problem scope. Qualitative user interviews were held after each iteration to gain insights on the problem scope and quantitative measures such as online surveys and A/B-testings were conducted to understand what key functionalities were most important for users and where there was room for improvement. 
                The most important features for users were:
                
                <ul>
                    <li>Trustworthy ratings</li>
                    <li>Easy, fast and understandable rating system</li>
                    <li>Being able to search for- and explore sustainable travel items</li>
                
                </ul>
                </div>
                <div>
                    During the process, a visual User Story Map was constantly updated and analyzed. This to make sure that all required functionalities were focused on the goals of the application.
                    <img className="processImg" src={usm}></img>
                </div>

                <div className="projectDesc">
                   SOLUTION
                </div>

                <div className="projectText">
                Mobile-application for travellers on-the-go, with focus on the seamless ratings of post-travel experiences and the social community. A search function was implemented so that travellers can easily search for travel items that has been rated by people in their community.
                </div>
                <img className="processImg" src={solution2}></img>
                </div>

                </div>



           
            
            </div>
            <div className="ScrollContainer">
                <ScrollArrow/>
                </div>
            <div className="row">
              <Footer/>
            </div>
           
        </React.Fragment>
    )

}
    export default TripDoodler;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
