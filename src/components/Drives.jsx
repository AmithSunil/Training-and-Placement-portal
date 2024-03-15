import React from 'react';
import './drives.css';
import DriveCard from './DriveCard';

const Drives = () => {

    const drives =[

        {
            title: 'TATA',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
            job:'Software Developer',
            package:'5 LPA'
        },        
        {  
            
            title: 'WIPRO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
            job:'Software Developer',
            package:'5 LPA'
        },
        {  
            
            title: 'Blae',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident tempore deserunt saepe sed molestias vero enim debitis ipsa magni, adipisci amet sunt qui laborum veritatis rerum consequuntur labore itaque!',
            job:'Software Developer',
            package:'5 LPA'
        }
    ]
        


    return( 
    <div className='drive-body'>
        {drives.map((drive, index) => {
            return <DriveCard key={index} detail={drives[index]} />
        })}
    </div>
    );
}
 
export default Drives;