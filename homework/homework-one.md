# Instructions

To get a better feel for 'real world' angular we're going to recreate some parts of the app we have now.

For something sufficiently complicated let's examine the Advertisers section. 

We won't recreate every single item but a large enough subset to get a real feel for angular. 

Advertisers is a subset of functionality that lives within our layout. 
(Since CSS is not the goal of this exercise I recommend using bootstrap for a quick jumpstart in styling which will also allow you to copy/paste pieces of markup for componenets such as Navigation and then just 'hook them up').

NOTE: Instructions may be out of order / not make sense in a section so read through the whole section.

### General layout
1. create a page layout for the 'site' with some sort of "top level" navigation links
2. clicking on links in this nav should take you to separate sub pages like a standard SPA (Single Page App) and the Browser's back/forward buttons should all function normally.

### Create Advertiser-list page
1. One of the links in the 'top level nav' should be 'advertisers'. Clicking on the link should send the user to a page with a list of advertisers in a table.

	- Specifically: the link should show the word "advertisers" and clicking it should take the user to '/advertisers' which will be a list -- in a table -- of all the advertisers.

	- This involves creating view/controller/service to support the page.

	- NOTE: To start you may want to just return static data out of your service but afterward you should extract that out and create a backend for it (task below).

	- Add an input box above the table that allows the user to search the table. Text in the search field should filter enties in the table to only show those that contain whatever is placed in the input.

2. Create a simple express app with an endpoint '/advertisers' that you can query using $http from your service to return the data.
	- NOTE: You can get the data by copying out of Bootstrapped data in the live app.

3. One of the links in the last column in the table should be "edit". Clicking this links should go to a new page 'advertisers/:id/edit' where :id represents the id of the entity in that row and upon navigating there it should display a form to edit that advertiser.

### Edit Advertiser Page
1. Create route/controller/view necessary to support editing an individual advertiser.

2. Add validation.
	- create at least one required field
	- create at least one email field
	- error messages should be shown below the input fields
	- clicking save should NOT save unless the item is valid. (To represent saving you can console.log to see that it is working. Use the $log service instead of console for logging).






