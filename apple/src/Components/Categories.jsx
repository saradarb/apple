import React from 'react';

function Categories(props) {


    
  const handleClick = () => {
    props.onClick(props.title); 
  };

  return (
    <div>
      <div className="logocard">
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
