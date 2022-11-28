import React from "react";


class index extends React.Component{

    

    render(){
 
        return(
            <div>
		<head>
		<title>Data-Scraper Marketing</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
                {/* <!-- Page Wrapper --> */}
			<div id="page-wrapper">

				{/* <!-- Header --> */}
					<header id="header" class="alt">
						<h1><a href="index.html">Data-Scraper Marketing</a></h1>
						<nav>
							<a href="#menu">Menu</a>
						</nav>
					</header>

				{/* <!-- Menu --> */}
					<nav id="menu">
						<div class="inner">
							<h2>Menu</h2>
							<ul class="links">
								<li><a href="/">Home</a></li>
								<li><a href="/Services">Services</a></li>
								<li><a href="/Customer">Customer Support</a></li>
								<li><a href="/Login">Log In</a></li>
								<li><a href="/signup">Sign Up</a></li>
							</ul>
							<a href="#" class="close">Close</a>
						</div>
					</nav>

				{/* <!-- Banner --> */}
					<section id="banner">
						<div class="inner">
							<div class="logo"><span class="icon fa-gem"></span></div>
							<h2>Data-Scraper Marketing</h2>
							<p>Finding the Right Customer for the Right Small Business </p>
						</div>
					</section>

				{/* <!-- Wrapper --> */}
					<section id="wrapper">

						{/* <!-- One --> */}
							<section id="one" class="wrapper spotlight style1">
								<div class="inner">
									<a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
									<div class="content">
										<h2 class="major">Why use Data-Scraper Marketing?</h2>
										<p>Imagine you are a budding new business owner and you are trying to market your product to customers in your area. As a new establishment you are still trying to build your brand by selling your high quality product to enthusiastic consumers but paying for marketing on your local radio station or billboards is costly and does not reach the target demographic. As a new business you want to reach customers who are known to be enthusiastic about the culture surrounding your product.</p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>

						{/* <!-- Two --> */}
							<section id="two" class="wrapper alt spotlight style2">
								<div class="inner">
									<a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
									<div class="content">
										<h2 class="major">Data Scaper Functionality</h2>
										<p>What better way to reach those consumers than by using the DataScrappers bayesian approach in targeting valuable customers. DataScrappers uses a probabilistic approach where data is gathered on enthusiastic customers who have self selected themselves to be a valued customer of your product. </p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>

						{/* <!-- Three --> */}
							<section id="three" class="wrapper spotlight style3">
								<div class="inner">
									<a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
									<div class="content">
										<h2 class="major">Digital Campaign</h2>
										<p>Data Scraper will identify the client’s target consumer(s) and recommend most effective marketing strategies to ensure the client receives maximum engagement. Data Scraper will discover potential consumers via scanning for tags or captions on social media sites that have relevant keywords in regards to the client’s product. Then, Data Scraper will compile a list of users from a social media platform that the client can use to send their social media campaign to. Data Scraper will also recommend a type of social media campaign (i.e. Instagram story, tweet, etc.) that should be used to target certain demographics. For example, if the product is applicable for middle-aged or older people, Data Scraper would likely recommend Facebook or Youtube. If the product is aimed towards younger people, then Data Scraper would likely recommend Tiktok, Snapchat, and Instagram. The client can choose which recommendations to take and kickstart their marketing campaign!</p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>


					</section>


			</div>


            </div>
            
           
        
        );

    }
    


}
export default index;