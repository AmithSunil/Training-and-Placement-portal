import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';

const DriveCard = ({detail}) => {


    return (
    <div>
        <div className='card'>
        <h1>
            {detail.title}
        </h1>

        <p>{detail.description}</p>


        <button type="button" class="btn btn-primary">Apply</button>       
        </div>
    </div>
  );
};

export default DriveCard;
