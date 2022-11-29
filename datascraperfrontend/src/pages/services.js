import React from "react";


class services extends React.Component{

    

    render(){
 
        return(
          <div>
            <div id="page-wrapper">

{/* <!-- Header --> */}
  <header id="header">
    <h1><a href="index.html">Data-Scraper</a></h1>
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

{/* <!-- Wrapper --> */}
  <section id="wrapper">


    {/* <!-- Content --> */}
      <div class="wrapper">
      <head>
        <title>Services</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </head>
        <header>
          <div class="inner">
            <h1>Data Scaper API Service and Packaging Price</h1>
            <ol>
              <li>The user is the client hoping to determine their business’s target consumer base and receive an effective marketing strategy to reach those consumers. </li>
              <li>When the user first boots up Data Scraper, they are brought to a sign-up screen where they can create an account for their business.</li>
              <li>After signing up, they are brought to the home screen of Data Scraper where they input the mission statement of the business, the product(s), and the background information of the business (i.e. office address, business size). </li>
              <li>After entering enough information, Data Scraper will pick out demographics that match the business and product descriptions and allow the client to choose which demographics to target.</li>
              <li>After the client determines which demographic to develop a marketing campaign for, Data Scraper will recommend a social media campaign targeted towards social media users that match those demographics.</li>
              <li>The client will then review the social media campaign details and confirm if they feel like the recommendations are fitting.</li>
              <li>Then, they can apply our recommendations to their marketing strategy and execute the social media campaign. </li>

            </ol>

          </div>
        </header>
        <div class="inner">
          <section>
            <h3 class="major">Services Price Packages</h3>
            <h4>Default</h4>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Services</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bronze </td>
                    <td> Access to Data-Scaper API calls up to 200 queries month .</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td>Access to Data-Scaper API calls up to 500 queries month.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>Access to Data-Scaper API calls up to 750 queries month.</td>
                    <td>39.99</td>
                  </tr>
                  <tr>
                    <td>Platinum</td>
                    <td>Access to Data-Scaper API calls up to 1000 queries month.</td>
                    <td>49.99</td>
                  </tr>
                  <tr>
                    <td>Palladium </td>
                    <td>Access to Data-Scaper API calls up to unlimited queries month.</td>
                    <td>69.99</td>
                  </tr>
                </tbody>
                <tfoot>

                </tfoot>
              </table>
            </div>



          </section>

        </div>
      </div>

  </section>



</div>
      <section id="footer">
          <div class="inner">

            <ul class="copyright">
            <li>&copy; Data-Scaper Inc. All rights reserved.</li><li>API: <a href="/">Data-Scaper</a></li>
            </ul>
          </div>
			</section>


          </div>

            );

        }
        
    
    
    }
    export default services;
            
            
            