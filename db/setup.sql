CREATE DATABASE hello;

USE hello;

CREATE TABLE Greeting(
	Id int IDENTITY(1,1) NOT NULL,
	Greeting nvarchar(50) NOT NULL
);