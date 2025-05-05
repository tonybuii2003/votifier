# Votifier
## Description
A web application to analyze and visualize demographic and economic voting patterns
## Introduction

### Screenshot
<img src="https://imgur.com/VYOsft7.png" alt="VotifierScreen" style="display:block; max-width:100%; margin-bottom:1rem; width:1000px; height:auto;" />

## Installation

### Prerequisites
- Ensure JDK 17 or higher is installed.
- Ensure Maven is installed (https://maven.apache.org/download.cgi) and added to system variables in environment variables. To add Maven so that you can use `mvn` in Git Bash in VS Code, use the command in git bash:
```sh 
export MAVEN_HOME=/c/Program\ Files/Maven/apache-maven-3.9.9
```

### Client Side
- cd into client directory, install dependencies: `npm install`, `npm install react-chartjs-2 chart.js`, `npm install d3`, `npm install chart.js`, `npm install plotly.js react-plotly.js`

### Server Side
- cd into server directory, install dependencies:
`npm install`, `pip install pymongo`, `pip install tqdm`

### Database Setup
- Start MongoDB, `mongod`
- Populate the database (can be done once, or on update of database contents) by navigating to votifier/server/data directory, run the `populate_db.py` script

## Running the Development Site Locally

### Client Side
- cd into client directory, run `npm start`

### Server Side
- Start MongoDB, `mongod`
- cd into server directory, run the Spring Boot application `./mvnw spring-boot:run`

-----
### Languages, Librarys, & Frameworks used on the Project
Client: React, Leaflet, Axios, Recharts, Chart.js, D3.js, Victory
</br>Server: Java, MongoDB, Maven, Spring Boot
</br>Proprocessing: Python (Pandas, GeoPandas, PyMongo, NumPy, Matplotlib, Seaborn, MGGG, PyEI)
