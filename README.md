# Code Challenge for MondoLabs - July 2016

Both parts 1 & 2 are contained within a single Rails application. It is hosted [Here](https://mondo-test.herokuapp.com/)

## Part 1

Recreate [Selus homepage](https://mondo-test.herokuapp.com/), based on designs provided.

The majority of the HTML for this page can be found at => app/views/mondo

Styles can be found at ==> app/assets/stylesheets/_mondo.scss (with some partials and vendor files at app/assets/stylesheets)

I used [Slick.js](https://kenwheeler.github.io/slick/) for the image

## Part 2

Create a [CMS](https://mondo-test.herokuapp.com/mondo/backend). I chose to create a blog. 

The CMS can be accessed via the navigation bar (reveled when 'hamburger' is clicked) or directly at **https://mondo-test.herokuapp.com/mondo/backend**

Upon attempting the access the CMS portion of the application, a user will be prompted to login with existing admin credentials or create a new admin account. For this feature I used 'Devise', a very popular authentication/authorization gem. 

In order to view part 2 of this assignment, one will have to [create an admin account](https://mondo-test.herokuapp.com/admins/sign_up). The email does not need to be a working address. 

Once logged in, an admin-user now has access to all CRUD actions for both 'Users' and 'Posts'. This includes associating a post with a user. 

## Challenges

### Part 1

The most challenging component of part one was extrapolating the design to work responsively. 

### Part 2

With features like scaffold and gems like simple_forms, Rails 4.2 is extremely-well suited for creating a basic blog. As such, I encountered few technical challenges in creating the application. I was, however, challenged with making design decisions as well as the time-constraints of the project -- given my current full-time commitment. Overall, I very much enjoyed this portion of the assignment.  
