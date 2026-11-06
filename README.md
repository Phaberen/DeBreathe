# DeBreathe

DeBreathe is my exam project. It's an app for training apnea and breathing exercises, like static apnea and CO2/O2 tables. The idea is that you have a profile, you do an exercise, and the app logs the session so you can go back and see what you did last time and what your old times were.

The name is a wordplay on debriefing while breathing, since the whole point is to breathe out and de-stress.

Right now it's only the backend structure (Express + routers).

## API

These are the endpoints I'm planning to have.

```
POST    /api/register         Create a user account
POST    /api/login            Log in
POST    /api/logout           Log out

GET     /api/users/{id}       Get a user's profile
PATCH   /api/users/{id}       Update parts of the profile
DELETE  /api/users/{id}       Delete a user

GET     /api/exercises        Get all exercises (static apnea, CO2 table, O2 table, box breathing...)
GET     /api/exercises/{id}   Get one exercise

GET     /api/sessions         Get the user's session history
GET     /api/sessions/{id}    Get one session
POST    /api/sessions         Log a finished session
DELETE  /api/sessions/{id}    Delete a session
```

## Ideas for later

A dashboard where you can see your results over time for each exercise, so you can see if you're actually getting better.

Personal Best for each exercise, shown on dashboard or/and independently in a box for itself with a trophy icon

A page with links and content of studies related to the topics. Maybe a page that servers the newest articles from a forum alike or 

## How to run it

```
npm install
npm run dev
```
 
  