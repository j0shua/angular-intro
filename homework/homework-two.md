# Instructions

Angular Router has some pretty big limitations such as only allowing one ng-view. For more flexible layouts there is a community module named ui-router that allows nested views, in addition to other powerful features. So lets add some more functionality to our app while exploring ui-router.

### General layout
1. Continuing with your code from before, convert the routes to instead use UI-Router's 'states'.

### Advertiser Details Page
1. Add a new page that will show advertiser details.
	- This page should be mounted on the url /advertisers/:id/details
	- That page itself (aside for any top level navigation) should have an internal nav-bar akin to the current site with 2-3 'sub-pages'

### Advertiser Details Subpages
1. Create 2-3 subpages
	- one subpage should be /settings which is mounted as a sub-view under it's parent page (/advertisers/:id/details). Navigating to that page should show a from that allows the user to edit the specific 'line items' of the advertiser (hint: you should already have a view that does this).
	- create some other subpage

	NOTE: 
		- only the sub-pages should change/refresh upon navigation.
		- insure navigation via the Browser's normal controls (back/forward buttons) works

2. Add validation to the /advertiser/:id/details/settings page
	- create at least one required field
	- create at least one email + required field
	- hookup validation to use errors
	- Ensure that saving does not fire while model / form is invalid (can disable save button altogether)
	- try changing when validation fires (onChange/onBlur etc


