# Code Challenge for MondoLabs - July 2016

Both parts 1 & 2 are contained within a single Rails application. It is hosted [Here](https://mondo-test.herokuapp.com/)

## Part 1

Recreate [Selus homepage](https://mondo-test.herokuapp.com/), based on designs provided.

The majority of the HTML for this page can be found at => app/views/mondo

## Part 2

Create a [CMS](https://mondo-test.herokuapp.com/mondo/backend). I chose to create a blog. 

Upon attempting the access the CMS portion of the application, a user will be prompted to login with existing admin credentials or create a new admin account. For this feature I used 'Devise', a very popular authentication/authorization gem. 

Once logged in, an admin-user now has access to all CRUD actions for both 'Users' and 'Posts'. This includes associating a post with a user. 

## Challenges

### Part 1

The most challenging component of part one was extrapolating the design to work responsively. 

### Part 2

Because Rails as a framework is extremely well suited for a basic blog, I encountered few technical challenges in creating the application. However, I was challenged with making design decisions as well as time-constraints (given my current full-time commitment). 
