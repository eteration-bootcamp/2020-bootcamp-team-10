
# 2020 Bootcamp Team 10 - `Six Musketeers`

## Team Members

| Role               | Name      |
|--------------------|-----------|
| Backend Developer  | A. Yavuz ORUÇ  |
| xxxxxxxx Developer | İsmail   |
| xxxxxxxx Developer | Derya  |
| xxxxxxxx Developer | Ahmet  |
| xxxxxxxx Developer | AhmetCan  |
| xxxxxxxx Developer | Ayşe  |

## Project

  ## Purpose/Project Proposal
  The project for "Turkey's Cultural places listing and pinning in a Map" is a Maven - Spring Boot MVC project. This Web project was developed using the Java software language. JDK 8 was used as the platform. In this project, MySQL Image was created using Docker. Tables were created in Localhost using SQL query language in Sequelpro. HQL query language is used for database query. Hibernate was used as an ORM tool.

  ## Software Language/ Project Environment

    Platform : Java Development Kit 8
    Framework : Spring Boot
    IDE : Eclipse or IntelliJ
    Database : MySQL
    Query Language : SQL - HQL
    ORM Framework : Hibernate
    Frontend : React – HTML – CSS
    Other Tools : Docker – Postman - VS Code

##Backend
    ### Steps
    
    1- Download JDK 11 or 8
    2- Download Eclipse or IntelliJ IDE
    3- Download Git
    4- users/.../git  create a folder(name doesnt matter) this path.
      4.1- git clone https://github.com/eteration-bootcamp/2020-bootcamp-team-10.git
    5- Go to IDE
      5.1- Import
      5.2- Existing Maven Project
      5.3- go to folder that you created and finish.
    6- IDE Build itself.
    7- Application.Java class is starter for project. If you click run button in this class you can see in your console window, that spring project starts.
    8-If you want to push your code on to repository.
      8.1- git status
      8.2- git add .
      8.3- git commit -m "bugfixes or something else"
      8.4- git push "origin" master/or your branch
    9- If you want to create SQL
      9.1- You can search for , "how can ı create mysql docker image"
      9.2- SequeLPro is so effective app for mysql
      9.3- You can connect your local host and create some tables.(CityId - CityName - CityDescription - CityPhoto- CulturalPlace -CityCoordinate)
      9.4- You can create db with code like below.
           
            CREATE TABLE `city` (
            `city_id` int(11) NOT NULL,
            `city_name` varchar(30) NOT NULL,
            `city_description` varchar(1500) NOT NULL,
            `city_photo1` varchar(30) NOT NULL,
            `city_photo2` varchar(30) ,
            `city_photo3` varchar(30) ,
            `cultural_place` varchar(30) NOT NULL,
            `city_coordinatesX` varchar(30) NOT NULL,
            `city_coordinatesY` varchar(30) NOT NULL,
             PRIMARY KEY (`city_id`)
             ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

           CREATE TABLE `user` (
            `user_id` int(11) NOT NULL,
            `first_name` varchar(20) DEFAULT NULL,
            `last_name` varchar(20) DEFAULT NULL,
            `username` varchar(250) DEFAULT NULL,
            `password` varchar(20) DEFAULT NULL,
            PRIMARY KEY (`user_id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
      
      
      **If you want to ask question, you can write on discord.
      
    
.
.
.
