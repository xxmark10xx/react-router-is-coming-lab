# Router is coming
## Getting started
-    Fork and clone this repository
-    Install dependencies with `npm i`
-    Spin up your application with `npm start`

## Introduction
Using all you've learned about React Router, you should create an application that allows users
-    to view data about their favorite Game of Thrones houses and characters
-    to navigate between pages, rendering only the data pertinent to their current page
-    save their favorite characters, creating a link to GoTs wiki in the process

## Preparation
Before we begin, it's important for us to look at the data we have been given to complete the task.

`gameOfThrones.js` is a large array containing data pertaining to Westeros Houses and a select number of their family members.

Each item, has a unique identifier in `id`, meaning we can access specific data relatively easily using the tools at our disposal.

## Step One: Build out Components
We need to create components for our application, starting with `Houses.js`, `House.js` and `Member.js`. These will be the components we will use to display our data.

- `Houses.js` should provide users with a list of all houses in gameOfThrones.js, as well as a link to each
- `House.js` should provide users with a list of all house members, as well as a link to each
- `Member.js` should provide users with individual house member data

We don't have the data flowing yet, so include a temporary tag indicating what data will be in each component in the future, as well as a bold header indicating which component it is. 

We'll come back to these shortly.

Houses.js
```
return (
    <div classNam="page">
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <div className="house-list">
            A list of houses
        </div>
    </div>
)
```
House.js
```
return (
    <div className='page'>
        <div className='header'>
            <h2>Members of a GoT House</h2>
        </div>
        <ul className='list'>
            A list of members
        </ul>
    </div>
)
```
Member.js
```
return (
    <div className="page">
        <div className="header">
            <h2>Specific Member Name</h2>
        </header>
        <div className="desc">
            A description
        </div>
    </div>
)
```


## Step Two: Implement Router
At the top of your `App.js`, be sure to import `BrowserRouter` and `Route` from `react-router-dom`.

You now need to set up your routes, specifically:

`/houses` - all houses
`/houses/:id` - all members from one houses
`/houses/:id/members/:id` - one member

Once you have completed these, make sure to test them out and check if you're hitting the right component.

## Step Three: Render Content
If you haven't already, import your data using `import gameOfThrones from gameOfThrones` and log the data inside your render method to ensure you can access it.

Once your data is available to you, begin rendering by displaying all houses as links in your `House.js` component.

**Remember to import and use `Link` when routing in React.**

Once you have completed this, move onto `Family.js` and `Member.js`. Each of these requires params matching, so make sure you take this into account passing props into your components.

## Bonuses
- Using the `wikiSuffix` value of the data object, create a link using `https://awoiaf.westeros.org/index.php/:suffix`.
-  Style it out! Some basic styling has been included, but you can definitely add a bit of your own flair
- Add the ability for users to favorite characters and houses and render these favorites alongisde the primary list