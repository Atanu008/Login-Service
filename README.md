# Login-Service
Running the Application

# BackEnd 

1. Make sure the following variables are added in bash_profile

  ```vi ~/.bash_profile``` 
  
  ```export export MYSQL_DB_USERNAME=root```
  
  ```export MYSQL_DB_PASSWORD=<your mysql root password>```
  
  ```export MYSQL_DATASOURCE_URL_LOGIN=jdbc:mysql://localhost:3306/login```
  
2. ```source ~/.bash_profile```
3. restart IDE for changes to take place
4. create database 'login' in Mysql (root)
5. Start Springboot application , make sure spring.jpa.hibernate.ddl-auto = create for the first time in application.properties file




# Swagger
Swagger API documentation is available at {BASE_URL}/swagger-ui.html. For eg http://localhost:9090/swagger-ui.html
