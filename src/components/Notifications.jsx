import React from 'react';
import './notifications.css';

const Notifications = () => {

    const notifications =[
        {
            title: 'TATA',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',

        },
        {
            title: 'WIPRO',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
         },
        {
            title: 'Blae',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
         },
        {
            title: 'Blae',
            date: '25/2/24',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
         }
    ];

    return (
        <div className='notifications-body'>
            <div className='title-body'>
                <h1>NOTIFICATIONS</h1>
            </div>
            <div className='notifications'>
                {notifications.map((notification, index) => (
                    <div key={index} className='notification'>
                        <h2>{notification.title}</h2>
                        <p>{notification.date}</p>
                        <p>{notification.description}</p>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;