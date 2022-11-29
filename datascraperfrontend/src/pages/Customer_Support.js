import React from "react";


class Customer_Support extends React.Component{
    
    render(){
 
        return(
            <div>
                	<head>
                        <title>Customer Support </title>
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                        <link rel="stylesheet" href="assets/css/main.css" />
                        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
                    </head>
                <div id="page-wrapper">

{/* <!-- Header --> */}
    <header id="header">
        <h1><a href="index.html">Solid State</a></h1>
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
        <header>
            <div class="inner">
                <div class="inner">
                    <h2 class="major">Get in touch</h2>
                    <p> Currently operrating out of westcoast please wait 24 or less for a response, thank you for your time and consideration of Data-Scapers</p>
                    <form method="post" action="#">
                        <div class="fields">
                            <div class="field">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div class="field">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div class="field">
                                <label for="Problem_Description">Problem Description</label>
                                <input type="text" name="Problem_Description" id="Problem_Description" />
                            </div>
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="4"></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </form>
                    <ul class="contact">
                        <li class="icon solid fa-home">
                            DataScapers Inc<br />
                            1 Washington Sq<br />
                            San Jose, CA  95192
                        </li>
                        <li class="icon solid fa-phone">(831) 313-5229</li>
                        <li class="icon solid fa-envelope"><a href="#">DataScapers@gmail.com</a></li>
                        <li class="icon brands fa-twitter"><a href="#">twitter.com/DataScapers</a></li>
                        <li class="icon brands fa-facebook-f"><a href="#">facebook.com/DataScapers</a></li>
                        <li class="icon brands fa-instagram"><a href="#">instagram.com/DataScapers</a></li>
                    </ul>

                </div>
            </div>
        </header>


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
    export default Customer_Support;
            
            
            
