import React from 'react';
import './Rappers.css';
import PropTypes from 'prop-types';




export const Rapper = function(props) {
    return (
      // Some other JSX
      <>
      <div className="Rapper">
      <span>{props.Name}</span>
      <span>{props.Face}</span>
        
      </div>
    
      <div className="Face">
      <span>{props.Face}</span>
      
      
      </div>
      
      </>
      
    );
  }

  Rapper.propTypes={
      Name: PropTypes.string.isRequired,
      // Face: PropTypes.
  };




// export const Raps = (props) => (
//         // Some other JSX
//         <div>Top Nine in the culture</div>
//   );


  export default Rapper;