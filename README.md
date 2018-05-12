<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Summary](#summary)
- [Requirements](#requirements)
	- [Application Setup](#application-setup)
	- [State Management](#state-management)
	- [Application functionality](#application-functionality)
- [High Level Design](#high-level-design)
- [Components](#components)
	- [App - /src/App.js](#app-srcappjs)
	- [Header - /src/components/Header.js](#header-srccomponentsheaderjs)
	- [PostListsControl - /src/components/PostListsControl.js](#postlistscontrol-srccomponentspostlistscontroljs)
	- [Menu - /src/components/Menu.js](#menu-srccomponentsmenujs)
	- [ListPosts - /src/components/ListPosts.js](#listposts-srccomponentslistpostsjs)
	- [PostTease - /src/components/PostTease.js](#posttease-srccomponentspostteasejs)
	- [PostControl - /src/components/PostControl.js](#postcontrol-srccomponentspostcontroljs)
	- [PostInput - /src/components/PostInput.js](#postinput-srccomponentspostinputjs)
	- [PostEdit - /src/components/PostEdit.js](#postedit-srccomponentsposteditjs)
	- [PostDetail - /src/components/PostDetail.js](#postdetail-srccomponentspostdetailjs)
	- [ListComments - /src/components/ListComments.js](#listcomments-srccomponentslistcommentsjs)
	- [CommentInput - /src/components/CommentInput.js](#commentinput-srccomponentscommentinputjs)
	- [CommentDetails - /src/components/CommentDetails.js](#commentdetails-srccomponentscommentdetailsjs)
	- [CommentControl - src/components/CommentControl.js](#commentcontrol-srccomponentscommentcontroljs)
- [Reducers and Actions](#reducers-and-actions)
	- [Category Actions - /src/actions/category_actions.js](#category-actions-srcactionscategoryactionsjs)
		- [fetchCategories()](#fetchcategories)
	- [Category Reducers - /src/reducers/category_reducers.js](#category-reducers-srcreducerscategoryreducersjs)
	- [Post Actions - /src/actions/post_actions.js](#post-actions-srcactionspostactionsjs)
		- [fetchPosts()](#fetchposts)
	- [Post Reducers - /src/reducers/post_reducers.js](#post-reducers-srcreducerspostreducersjs)
- [Utils](#utils)
	- [PostsAPI](#postsapi)
- [Usage](#usage)

<!-- /TOC -->

# Summary
The Readable project is a content and comment web app that allows a user to add,
edit, delete and vote on posts and comments for specific posts. The project aims
to familiarize me with React/Redux design and architectural patterns to
handle application state on more complex applications in a more maintainable
way.

The Readable project is the 2nd project laid out in the curriculum for the
Udacity React Nanodegree.

# Requirements
## Application Setup
* Installation and Setup
  - The application requires only npm install and npm start to install and
    launch
* Documentation
  - A README is included with the project with clear instructions for installing
    and launching.

## State Management
* Redux Application State
  - Most application state is managed by the Redux store. State-based props are
    mapped from the store rather than stored as component state. Form inputs and
    controlled components may have some state handled by the component.
* Application State Updates
  - Updates are triggered by dispatching action creators to reducers.
  - Reducers and actions are written properly and correctly return updated state
    to the store.

## Application functionality
* Posts List View
  - Listed posts contain
    1. Title
    2. Author
    3. Number of comments
    4. Current score
    5. Voting mechanism to upvote or downvote the post
    6. Buttons or links for editing or deleting that post
  - List posts link to the detail page for that post
  - All posts are listed at root
  - All posts for a category are listed at /:category
  - List pages included a sorting mechanism by date or by score
  - Control included to add new posts
  - All available categories are visible in any list view
* Post Detail Page
  - Post detail is available at /:category/:post_id
  - Post is displayed contains
    1. Title
    2. Body
    3. Author
    4. Number of comments
    5. Current score
    6. Voting mechanism to upvote or downvote the post
    7. Buttons or links for editing or deleting that post
  - Listed comments are displayed with the following:
    1. Author
    2. Current score
    3. Voting mechanism to upvote or downvote the comment
    4. Buttons or links for editing or deleting that comment
  - The voting mechanism works and correctly displays the new vote score after
    clicking for both the post and comments.
  - All comments for a post are displayed below the post body.
  - A mechanism for adding a new comment is visible on the detail page and
    functional.
* Post Inputs
  - Application has a form for creating a new post. Submitting the form properly
    adds the post to the correct category.
* Comment inputs
  - Application has a form for adding comments to a post. Submitting the form
    properly adds the comment to the correct post.
* Post and Comment Editing
  - Edit buttons for posts/comments open a form with existing data
    pre-populated. Submitting the form correctly updates the data for the
    comment/post.
* Post and Comment Deleting
  - A mechanism for deleting posts and comments exists. Clicking the button/link
    correctly removes the post/comment from list view and makes post
    inaccessible at its URL. When a user goes to a deleted post’s URL, a 404
    page is displayed.
* Navigation/Routing
  - User is able to navigate between categories, main page and post detail pages
    without typing address in the address bar.

# High Level Design
The Readable application is a Single Page Application that mimics popular
content and comment web apps like Reddit. Users will be able to post content to
predefined categories, comment on their posts and other users' posts, and vote
on posts and comments. Users will also be able to edit and delete posts and
comments.

The backend foundations to store and maintain user posts and comments was
actually supplied as part of the project definition and is outside the scope of
this project. The intent of this project was to exercise and demonstrate how the
React JS framework and the Redux JS framework can be used to implement a SPA
without having to pass application state information from component to component
throughout the application thus reducing some of the state management complexity
that can exist in React based applications.

The front end of this project is made up of different React components that when
pulled all together all the user to -
1. See all posts
2. See all posts specific to a selected category
3. Add, edit and delete posts
4. Comment on posts
5. Edit and delete comments
6. Vote on both posts and comments

Application state for this project follows design and architectural patterns
that are common the Redux based applications which revolves around a strict
unidirectional data flow. There is a single point of truth or store that
React components can essentially register to monitor or dispatch actions to.
Only the components that need access to the single point of truth will have
code that accesses this state information instead of following the React State
Management model where component state is passed down from parent components to
child components.

# Components
Each of the following components are organized and defined with the intent that
they only deal with the rendering of and maintenance of state for information
that make sense specifically for them. There is an inherent Parent-Child
relationship to some of these components.

## App - /src/App.js
The App is the top level component really representing the Readable application.
As state is maintained by the Redux framework this top level component mostly
is responsible for containing the Routing for the application between the root
post listing page, the per category post listing pages, the post add page, the
post edit page and the post details page.

There is a higher level index.js file that contains a call to the ReactDOM
library which will ultimately render all the components listed out and
described. It is within this JavaScript file that Redux store is created as well
as where the BrowserRouter NPM package is included to allow Routing to work.

## Header - /src/components/Header.js
The Header component is a stateless component that simply renders the HTML for
a page header. This Header component should be on every page.

## PostListsControl - /src/components/PostListsControl.js
The PostListsControl component is a more complex functional component that
handles the HTML rendering of a post control element that allows the user to see
the number of categories the application is aware of, a way to select the a
category specific view of posts, to add a post and to sort the listed posts by
date or vote count.

As this component has a control to sort posts, it needs a way to trigger that
sorting of the store of posts. This component registers to have access to the
`handlePostsSort` post action creator as a component prop.

This PostListsControl component is included in a couple different pages in the
application so that the user can add a new post as well as control the listing
of posts currently visible.

## Menu - /src/components/Menu.js
The Menu component is a simple functional component that handles the HTML
rendering of the category dropdown menu in the PostListsControl element.

This component is referencing the categories the application is aware of from
the store and using them for the elements in a dropdown menu.

## ListPosts - /src/components/ListPosts.js
The ListPosts component is a simple functional component that receives a
category as a prop and handles the HTML rendering for the list of posts that the
application is aware of. This component is used to display all of the posts by
default when the user browses to the root URL as well as when the user selects
(or browses to) the category specified as the prop.

This component is referencing the all posts the application is aware of from the
store and displaying them in a list as a summary or "tease" to the user.

## PostTease - /src/components/PostTease.js
The PostTease component is a stateless functional component that receives a
post as a prop and handles the HTML rendering for that post in a summary or
"tease" to the user.

## PostControl - /src/components/PostControl.js
The PostControl component is a functional component that receives a post as a
prop and handles the HTML rendering for the controls needed to vote, edit, and
delete a post. The PostControl component is rendered for each PostTease
component as well as by the PostDetail component.

As this component has controls to vote, edit and delete a specific post, it
needs a way to trigger those actions on the store of posts. This component
registers to have access to the `handleVoteOnPost` and `handlePostDelete`
post action creators as component props.

## PostInput - /src/components/PostInput.js
The PostInput component is a more complex functional component that handles
the HTML rendering of the form input to allow a user to add a new post. It also
handles the logic required to bundle up the user input into an object that
can be used by application middleware to add the post to the backend server.

This component is referencing all the categories the application is aware of
from the store and displaying them as elements in a dropdown menu for user
input. As this component has to submit a new post for addition, it needs a way
to trigger this ADD action on the store of posts. This component registers to
have access to the `handlePostAdd` post action creator as a component prop.

This component has internal state to help track when the post ADD has been
submitted.

## PostEdit - /src/components/PostEdit.js
The PostEdit component is a more complex functional component that receives a
postID as a prop and handles the HTML rendering of the form input to allow a
user to edit an existing post. It also handles the logic required to bundle up
the user input into an object that can be used by application middleware to edit
the post on the backend server.

This component is referencing all of the posts the application is aware of from
the store and filtering them down to a single post that matches the specified
postID. As this component has to submit a post for edit, it needs a way to
trigger this EDIT action on the store of posts. This component registers to have
access to the `handlePostEdit` post action creator as a component prop.

This component has internal state to help track when the post EDIT has been
submitted.

## PostDetail - /src/components/PostDetail.js
The PostDetail component is a functional component that receives a postID as a
prop and handles the HTML rendering for that post in a detail view for the user.
This component references the PostControl component so that a user to vote, edit
and delete this specific post. It also references the ListComments component so
that the user can see all the comments for the specific post.

The PostDetails component also handles the 404 error page when a user navigates
to the details page of an unknown post.

This component is referencing all of the posts the application is aware of from
the store and filtering them down to a single post that matches the specified
postID.

## ListComments - /src/components/ListComments.js
The ListComments component is a stateless functional component that receives a
post as a prop and handles the HTML rendering for the comments in that post.

## CommentInput - /src/components/CommentInput.js
The CommentInput component is a more complex functional component that handles
the HTML rendering of the form input to allow a user to add a new comment. It
also handles the logic required to bundle up the user input into an object that
can be used by application middleware to add the comment to the backend server.

As this component has to submit a new comment for addition, it needs a way
to trigger this ADD action on the store of posts. This component registers to
have access to the `handleCommentAdd` post action creator as a component prop.

This component has internal state to help with some UI rendering where the
input fields are hidden until the user clicks an "Add a comment ..." button.

## CommentDetails - /src/components/CommentDetails.js
The CommentDetails component is a more complex functional component that handles
the HTML rendering displaying the comment details to the user. Additionally it
handles the HTML rendering for the controls to vote, edit and delete a comment.
It also handles the HTML rendering of the form input to allow a user to edit a
comment. Lastly it handles the logic required to bundle up the user input into
an object that can be used by application middleware to edit the comment on the
backend server.

As this component has controls to vote, edit and delete a specific comment, it
needs a way to trigger those actions on the store of posts. This component
registers to have access to the `handleVoteOnComment`, `handleCommentEdit` and
`handleCommentDelete` post action creators as component props.

This component has internal state to help with some UI rendering where the
edit input fields are hidden until the user clicks the edit button.

## CommentControl - src/components/CommentControl.js
TBD

# Reducers and Actions
Following the Redux patterns, application state is maintained in the store with
reducers updating that state and action creators defining the type of state
update that needs to occur as well as the information that may be needed for
state modification.

Following good code modularity best practices it made sense to break out
application state into a categories object and a posts object. Categories were
a simple first step to build familiarity with Redux as I implemented. Posts
were a more complex state object to maintain.
## Category Actions - /src/actions/category_actions.js
Categories are retrieved from the backend server and used through the
application by various components when filtering posts or for components that
require a category as input.
The fundamental action that the category state needed to support was being
populated by information retrieved from the backend server.
### fetchCategories()
Upon index.js being loaded by the browser, this `fetchCategories()` API will
be invoked. In turn the backend server will be queried to get all categories.
The resultant list of categories will be passed as input to the
`receiveCategories()` action creator.

## Category Reducers - /src/reducers/category_reducers.js
The reducer handles only one action - the RECEIVE_CATEGORIES action. This
action simply takes the input list of categories and returns it to the caller
to be used as state.

The handling of this action populates the categories state variable
that is
then used throughout the application.

## Post Actions - /src/actions/post_actions.js
Posts like categories are retrieved from the backend server and used throughout
the application. Unlike categories, posts are expected to be added to, updated
and deleted. Further I decided to make post comments a part of the post object
being maintained in the list of posts being stored by Redux. This state "shape"
differs slightly from the "shape" of posts that the backend server is
maintaining.
### fetchPosts()
Upon index.js being loaded by the browser, this `fetchPosts()` API will
be invoked. In turn the backend server will be queried to get all posts as well
as all comments per post. The resultant list of posts will be passed as input
to the `receivePosts()` action creator.

## Post Reducers - /src/reducers/post_reducers.js
As most of the actions fall under the umbrella of create, update, delete (CRUD)
and the backend server needs to be updated in addition to the posts state array
being updated, there is a common pattern for the actions being processed by the
posts reducer. For each action the reducer will copy the existing state, update
it, call the PostsAPI to update the backend server, then return the updated
copy of the posts array as state to the caller. Below is the list of actions
that are defined as action creators in post_actions.js and for which the
reducer will process.

* RECEIVE_POSTS
* SORT_POSTS
* VOTE_ON_POST
* ADD_POST
* DELETE_POST
* EDIT_POST
* VOTE_ON_COMMENT
* DELETE_COMMENT
* EDIT_COMMENT
* ADD_COMMENT

# Utils
## PostsAPI
The PostsAPI is a set of functions that can be used to access the backend server
to retrieve, add, vote on, edit and delete posts and comments. This API handles
the using the RESTful API being supplied by that backend server.

# Usage
This project assumes that you've got NPM installed. As the JavaScript to handle
dynamic rendering of content and responding to user input is all included in the
folders of the repo, a user additionally needs to be using a web browser that
supports JavaScript.

Pull the entirety of the repo and the directory structure to your local
machine.  
Navigate to that directory via terminal or the command line.  
Navigate into the `api-server` directory.  
Execute `npm install`  
Execute `npm start`  
Open another terminal window or tab.  
Navigate back to the root of the repo and into the `readit` directory  
Execute `npm install`  
Execute `npm start`  
The application should automatically open a web browser and navigate to
http://localhost:3000
