import React, { useState,useEffect } from 'react';
import './notifications.css';
import axios from 'axios';

const Notifications = () => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/user/notification/`)
          .then((response) => {
            setNotifications((response.data).reverse());
            console.log(response.data);
            setLoaded(true)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    const [notifications,setNotifications] = useState([
        
        {
            title: 'Tata',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',

        },
        {
            title: 'Wipro',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
         },
        {
            title: 'TCS',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
         },
        {
            title: 'Infosys',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
         }
    ])

    return (
        <div className='notifications-body'>
            <div className='title-body'>
                <h1>NOTIFICATIONS</h1>
            </div>
            <div className='notifications'>
                {loaded && notifications.map((notification, index) => (
                    <div key={index} className='notification'>
                        <h3>{notification.subjects}</h3>
                        <p>{notification.created_at.split("-").reverse().join("-")}</p>
                        <p>{notification.message}</p>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;