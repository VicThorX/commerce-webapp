import React from 'react';
import IconBox from './IconBox';

function IconBoxes() {
  return (
	<div className="icon_boxes">
		<div className="container">
			<div className="row icon_box_row">

                <IconBox 
                    image="../asserts/images/icon_1.svg" 
                    title="Free Shipping Worldwide" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie." 
                />

                <IconBox 
                    image="../asserts/images/icon_2.svg" 
                    title="Free Returns" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie." 
                />

                <IconBox 
                    image="../asserts/images/icon_3.svg" 
                    title="24h Fast Support" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie." 
                />

			</div>
		</div>
	</div>
  );
}

export default IconBoxes;
