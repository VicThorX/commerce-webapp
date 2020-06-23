import React from 'react';

function IconBox(props) {
  return (
    <div className="col-lg-4 icon_box_col">
        <div className="icon_box">
            <div className="icon_box_image"><img src={props.image} alt="" /></div>
            <div className="icon_box_title">{props.title}</div>
            <div className="icon_box_text">
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  );
}

export default IconBox;
