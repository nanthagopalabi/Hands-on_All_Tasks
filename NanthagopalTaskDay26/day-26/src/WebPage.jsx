import React from 'react'
import{useParams} from 'react-router-dom'


function WebPage() {
    const{courseName}=useParams();

    const courseInfo={
        All: "",
        FullstackDevelopment: "Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!  The GUVI Blogs Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!",
        DataScience:"One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration. The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!",
        CyberSecurity:"Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.",
        Career:"Understanding the current technology career landscape is your first step. Profiled on this page are some of the most sought-after IT careers based on earning power, growth potential, job outlook, and excitement. Click the button below each tech job summary for a deep-dive job description."
    };
    const info=courseInfo[courseName];
  return (
    <div>
    <h2>{courseName}</h2>
    <p>{info}</p>
</div>
  )
}

export default WebPage