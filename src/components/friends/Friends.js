//React
import React,{useState} from 'react';
import snapchat from './Snapchat-18457194.jpg';
import eddie from './IMG_20181011_121752.jpg';
import reen from './IMG_20190607_172642.jpg';
//css
import './friends.css';

const Friends = () => {
    const [_friends]  = useState([
        {name:'Reen Ngendo' ,age:'23 years old',"profile":snapchat,career:'Software developer.'},
        {name:'Edward Kihiro',age: '30 years old',"profile": eddie ,career:'Software developer'},
        {name:'wambui',age: '22 years old', "profile":reen ,career:'Software developer'}
    ]);
    return (
        <section className="friends">
            <h4 className="friends-heading">Here My top friends.</h4>
            {
                _friends.map((friend,i) => (
                    <div className="friend" key={i}>
                        <div className="friend-profile-img-container">
                        <img src={friend.profile} className="friend-profile-img" alt="loading..." />
                        </div>
                        <div className="friend-details">
                        <h5 className="friend-details-name">Name: {friend.name}</h5>
                        <h5 className="friend-details-career">Career: {friend.career}.</h5>
                        <p className="friend-details-age">Age: {friend.age}.</p>
                        <p className="friend-details-bio">{friend.bio}.</p>
                        </div>                        
                    </div>
                ))
            }
        </section>
    )
};


export default Friends;