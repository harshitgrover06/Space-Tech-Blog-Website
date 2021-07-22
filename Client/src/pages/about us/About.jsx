import "./about.css";
import pic from'./xyz.png'
import pics from'./xzy.jpg'
import { Link } from "react-router-dom";


export default function About () {
    
    return(
        <div class="wrapper">
            <h1>Our Team</h1>
            <div class="team">
                <div class="team_member">
                    <div class="team_img">
                    <img src={pics}></img>
                    </div>
                    <h3>Satya Saketh Matury</h3>
                    <br></br>
                    <p class="role">Frontend Developer</p>
                    <br></br>
                    <p class ="des"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    <form class="" action="mailto:satya.matury.19cse@bmu.edu.in" method="post">
                    <a class="gradient-button gradient-button-3">Contact</a><br/><br/>
                    <i class="topIcon fab fa-instagram"></i>
                    <i class="topIcon fab fa-github"></i>
                    <i class="topIcon fab fa-linkedin-in"></i>
      </form>
                </div>
                <div class="team_member">
                    <div class="team_img">
                    <img src={pic} alt="Team_image"/>
                    <h3>Harshit Grover</h3>
                    <br></br>
                    <p class="role">Frontend Developer</p>
                    <br></br>
                    <p class="des">Harshit worked as a full stack developer on this project and he's currently a 3rd year undergraduate student pursing B.tech in Computer Science from BML Munjal University </p>
                    <form class="" action="mailto:harshit.19cse@bmu.edu.in" method="post">
                    <a class="gradient-button gradient-button-4">Contact</a><br/><br/>
                    <i class="topIcon fab fa-instagram"></i>
                    <a target="_blank" href="https://github.com/harshitgrover06"><i class="topIcon fab fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/harshit-grover-410a641a0/"><i class="topIcon fab fa-linkedin-in"></i></a>
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>

    );
}