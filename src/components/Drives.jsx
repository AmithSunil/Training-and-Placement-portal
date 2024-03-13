import React from 'react';
import './drives.css';
import DriveCard from './DriveCard';

const Drives = () => {

    const drives =[

        {
            title: 'TATA',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
        },        
        {  
            
            title: 'WIPRO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
            
        }
    ]
        


    return( 
    <div>
        <DriveCard detail={drives[0]} />
        <DriveCard detail={drives[1]}/>
    </div>
    );
}
 
export default Drives;