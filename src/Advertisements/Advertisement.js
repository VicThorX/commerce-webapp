import React from 'react';

function Advertisement() {
  return (
    <div className="avds_xl">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="avds_xl_container clearfix">
						<div className="avds_xl_background" style={{backgroundImage: "url('../asserts/images/avds_xl.jpg')"}}></div>
						<div className="avds_xl_content">
							<div className="avds_title">Amazing Devices</div>
							<div className="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.</div>
							<div className="avds_link avds_xl_link"><a href="categories.html">See More</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Advertisement;
