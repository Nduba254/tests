//React
import React,{useState} from 'react';

//css
import './person.css';

const Person = () => {
    const [personalData] = useState({
        name:'Nduba Wambui',
        career:'Web Developer',
        age:`${22} years old`,
        bio:'LMAO',
        img:'./Camera Roll/Snapchat-87623220.jpg'
    })
    return (
        <section className="person">
            <div className="person-card">
                <div className="person-card-img-container">
                <img src={require ('./Snapchat-87623220.jpg')} className="person-card-img" alt="" />
                </div>
                <div className="person-card-details">
                <h5 className="person-card-heading">Name: {personalData.name}</h5>
                <h5 className="person-card-subheading">Career: {personalData.career}.</h5>
                <p className="person-card-text">Age: {personalData.age}.</p>
                <p className="person-card-text"> Bio: {personalData.bio}.</p>
                </div>
            </div>
        </section>
    )
};
export default Person;