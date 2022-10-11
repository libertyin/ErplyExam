# ErplyExam

TC1: Adding a new customer by Add Customer button 
1. Click Add Customer button

expected result: Create customer template opened. Person is selected. Save button is disabled.
2. Enter First name, Last Name

data: First Name = Mark, Last Name = Zuckerberg

expected result: Save button is disabled after entering First Name. Save button is enabled after entering Last Name
3. Click Save button

expected result: Add Customer button is hide. Curtomer First Name, Last Name, Vaikimisi grupp appeared in left view panel and in right profile
4. Click Close customer template

expected result: Add Customer Function Button is visible

TC2: Adding a new customer by Add Customer Function button
1. Click Add Customer Function Button

expected result: Create customer template opened.
2. Enter First name, Last Name, Loyalty card number, Email, Phone

data: First Name = Elon, Last Name = Musk, Loyalty card number = , Email = elon.mask@gmail.com , Phone = 212-456-7890

expected result: Save button is enabled after entering Last Name
3. Click Save button

expected result: Add Customer button is hide. Curtomer First Name, Last Name, Loyalty card number, Vaikimisi grupp appeared in left view panel and in right profile

TC3: Editing customer information
1. Create a customer by Add Customer button

data: First Name = Bill, Last Name = Gates, Loyalty card number = 79250002. Mobile = +11111111111, Home Store = Pohiladu, Birthday = 01DD12MM

expected result: Curtomer First Name, Last Name, Loyalty card number, Vaikimisi grupp appeared in left view panel and in right profile
2. Open Customer Profile. Click Edit Customer button

expected result: Edit customer template opened
3. Replace First Name, Last Name. Clean Loalty card number. Click Save button

data: First Name = Mark, Last Name = Zuckerberg

expected result: Curtomer new First Name, new Last Name, Loalty card number = "", Vaikimisi grupp appeared in the left panel and in the right panel

TC4: Intercept test

TC5: Intercept test for an error case