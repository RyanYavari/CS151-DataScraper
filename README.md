# Data-Scraper Marketing
### Group 4: Shirley Li, Emanuel Navarro-Ortiz, Ryan Yavari ###

## Proposal Contributions ##
 * Shirley wrote the High-Level Plan and Approach as well as the User Operations.
 * Ryan wrote the solution as well as formatted the README.txt file
 * Emmanuel wrote the Functionality and Problem/Issue
## Project Presentation Contributions ##
 * Shirley created and presented every frontend slide except the last frontend slide. She also operated the demo during the presentation.
 * Ryan created and presented all the slides on backend as well as narrated over the demo during the presentation.
 * Emmanuel created and presented the slides introducing the project and it's purpose, as well as operated the demo during the presentation.
## Code and Report Contributions ##
* Shirley
  * Code Contribution
    * Created part of frontend with Reactjs and Material UI library
      * Login
      * Signup
      * Dashboard
    * Wrote controller code in both frontend and backend
      * Fetch information from Reactjs frontend to Spring Boot backend
      * Evaluate signup password strength
      * Verify legitimate user
      * Create new user or business
      * Add or remove a business from user
      * Transfer parsed and formatted Twitter API call result into Business model
      * Return newly changed models to frontend
    * Created models User and Business
  * Report Contribution
    * Described her individual contributions
    * Wrote the Operations section
    * Updated Use Case and State Diagrams
    * Recorded and uploaded demo
    * Wrote Steps to Run the Code
    
* Ryan
  * Code Contribution
    * Created the backend with Twitter API v2 and Postman
      * Created "Parser" class
        * Contains a "search" method that utilizes a bearer key to return data from Twitter in JSON Format
        * Contains a "searchUsername" method that utilizes a bearer key to return user handles from Twitter in JSON Format
      * Created "Formatter" class
        * Contains a "format" method that inputs JSON data from the "search" method and outputs a HashMap of data
          * Added exception handling to prevent the user from inputting faulty keywords
        * Contains a "formURL" method that inputs a username and Twitter ID and outputs a Twitter URL
      * Set up Twitter Developer Account
        * Filled out forms to acquire security tokens/keys and "Elevated" access to Twitter's database
  * Report Contribution
    * Wrote the Class Diagram
    * Updated Solutions 
    * Formatted the report into GitHub
    * Described his Individual Contributions
 

* Emanuel Contribution
  * Created created front end login page with html and javascript
    * Main page [1]
    * Services page
    * Customer Support [2]
    * Slide Show [3]
    * Initialize databases
    * Attained alternate developer access key via twitter( our program used Ryans)
  * Wrote code for front and and database
    * Connected all pages together with react
    * Imported javascript libraries to load with front end(used template for website) [4]
    * Researched multiple frameworks
* Report
    * Time diagram -Created a time diagram that show how the program should be executed
    * Problem Statement - Developed a problem statement which gave us a problem to solve
    * Functionality -Generated functional solution to problem statement

        
    
## Problem ##
Imagine you are a budding new business owner and you are trying to market your product to customers in your area. As a new establishment, you are still trying to build your brand by selling your high quality product to enthusiastic consumers. However, paying for marketing on your local radio station or billboards is costly and does not reach the target demographic. As a new business, you want to reach customers who are known to be enthusiastic about the culture surrounding your product. 

## Previous Works ##
The market for data scraping is huge as many advertisements are geared towards target audiences. Without data scraping, businesses wouldn't have an idea of where to start their pitch. Some applications that use data scraping are:
[1] Supermetrics and
[2] WebScraper.

## Diagrams ##
| UML Diagram       | Summary       | 
| :------------- |:-------------| 
| [Use Case Diagram](https://github.com/RyanYavari/CS151-DataScraper/blob/main/diagrams/Use%20Case%20Diagram.png)   | The Use Case Diagram depicts all of the user's interactions with the DataScraper program. These interactions include logging in/signing up, inputting business information, and viewing scraped social media handles. | 
| [State Diagram](https://github.com/RyanYavari/CS151-DataScraper/blob/main/diagrams/Updated%20State%20Diagram.png)      | The State Diagram depicts the various states the DataScraper program undergoes, including moments where the program is not running, serving the client, or encountering errors.   |  
| [Class Diagram](https://github.com/RyanYavari/CS151-DataScraper/blob/main/diagrams/Updated%20Class%20Diagram.png)    | The Class Diagram depicts the blueprint of the DataScraper program. In this diagram, objects are modeled to show the differences and relationships between one another, and to describe the functionality of each individual object.       | 
| [Timing Diagram](https://github.com/RyanYavari/CS151-DataScraper/blob/main/diagrams/Timing%20Diagram.png)    | The Time diagram that depicts the state changes of the Data Scrapper and behavior response of state changes under a given constraint of time.     |  

## Functionality ##
What better way to reach those consumers than by using the DataScraper’s Bayesian approach in targeting valuable customers. DataScrapers uses a probabilistic approach where data is gathered on enthusiastic customers who have self selected themselves to be a valued customer of your product. This is done by querying the Twitter Application Programming Interface (API) to gather handles of users whose tweets include the inputted keywords. This list of handles is shown to the user as a list of potential customers.

## Operations ##
1. The user visits the home page of the Data Scraper website.
2. They click Login or Signup depending on the existence of their account. They can also click the Services page to see what services Data Scraper provides.
3. After entering their user information, Data Scraper verifies their account and allows the user to view their dashboard.
4. The user can create a new business/data scraping profile through the form or logout using the drop down menu attached to the logo.
5. Creating a business/data scraping profile requires the user to input a business name, select the business’s type, input keywords that the business encapsulates, and input the number of results desired by the user.
6. Clicking the Generate button will generate a new business and Data Scraper will give a table of Twitter handles that match the keywords for the user to use in their social media marketing campaign. 
7. The user can also delete a business by clicking the Delete button in the business’s page.

## Solution ##
The way we’ve solved the problem of connecting marketers with their target audience is by utilizing the “Search Tweet” and “Tweet Lookup” endpoints on Twitter API v2. In our application, we gather client input keywords and insert them into the “Tweet Lookup” endpoint to gather an array of recent tweets relating to the keywords. Now, we have the tweets of the target audience. In order to actually connect the marketers with these users, we utilized the “Tweet Lookup” endpoint to acquire the username handles from the array of tweets. Finally, we show the client a list of both the tweet URLS and the username handles on our beautiful GUI. At last, the client now has access to contact the target audience with the context of the tweet. 

## Steps to Run the Code ##
Clone the project and click the run button in your IDE. Or right click `Cs151DataScraperApplication.java` and click Run As -> Java Application. Then go into your Terminal, enter into the `datascraperfrontend` directory, and type `npm start`. The program will attempt to run using Ports 8080 and 3000. If those two ports on your device are occupied, type `Y` when your Terminal asks if you would like to switch ports. 

## Snapshot of the Running Program ##
https://user-images.githubusercontent.com/57884384/205530872-34809ce8-7cb9-47ee-a2d8-738d0c298c13.mp4

## References ##
[1] Supermetrics: https://supermetrics.com/?utm_medium=cpc&utm_campaign=listings&utm_source=capterra

[2] Webscraper: https://webscraper.io/

