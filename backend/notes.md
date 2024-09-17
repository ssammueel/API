this is the summary of creating an full api

1. register 
- here we are registering  a new user
- we have to make sure that the user has input all the values needed
- if the user is oready in the database we have not to register him twice we say that the use is oready in the database
- we proceed to the verification where we see isf the password and confirm password are the same 
- if they are the same then we hash the password
- and after we hash then we are to register the user in the database

2. log in
- we have to check if the user is oready in the database we use the find to fing the user
- if the user is not in the database he is returned to the register
3. log out