<div align="center">

# E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)

</div>

## Table of Contents

* [Description](#description)
* [Category](#category)
* [Product](#product)
* [Installation](#installation)
* [Usage](#usage)


## Description

This application was created as part of a UT Full Stack Coding Bootcamp challenge. Given the starter code of a working Express.js API, code was configured to use Sequelize to interact with a MySQL database. 

Code syncs Sequelize models to a MySQL database on the server start, includes column definitions for all four models and model associations, and provides the following GET, POST, PUT, and DELETE routes:

## Category

 * GET all categories, GET a single category by ID, POST(create) a new category, PUT(update) and existing category by ID, and DELETE an existing category by ID. 



## Product 

 * GET all products, GET products by ID, and DELETE products by ID. POST(create) and PUT(update) product routes were provided in starter code.


## Installation
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source schema.sql`. Log out of MySQL with command `\q`.
* Seed database with command `npm run seed`.

## Usage
 Start server with command `npm start`.
* Access API routes with Insomnia using the following endpoints:
* Make POST and PUT requests with the following JSON body formats:








