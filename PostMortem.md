Overall, I'm happy with the results of this project. I stayed true to the deadline of the challenge, which was 3 days, and have not made any updates except for adding this post mortem.

**My goals going in:**  
- create a full mockup in Figma before starting
  - Can be viewed [here](https://www.figma.com/file/CjcXDnUcNDluEyrIm9j4XG/CrytoWatch-Design?type=design&node-id=0-1&mode=design&t=THlUptZREgi84r8m-0)
- complete all base requirements (leverages API with data that updates every 30 seconds, list page, details page, built with React)
- implement subtle animations  
- create a favorites system that utilizes localStorage  
- create "skeleton" components as placeholders to display while fetching data  
- add unit tests
- create a basic form that allows the user to "sign in", which would be saved in localStorage and used as a key for "favorites"

**What I didn't get to finish:**  
- add unit tests: I managed to configure and add jest, but I only had time to write two quick tests.
- create basic form: I really wanted to display "welcome, guest" in the Header with an optional sign in button that would display the users name and allow multiple "favorites" profiles in localStorage

### Current Issues

### #1. State Desync

When favorites are added for the first time or "show more" or "show less" buttons are clicked, favorites and all coins act on independent timers.

#### What I could do to fix this

**Solution 1:**
Shared state for API fetch results either within a context or for the "home" page instead of using two separate hook instances.

Pros:
- We would no longer need to use two simultaneous calls to the same endpoint and could instead make a single call for all assets and filter on the client side for favorites
- Easy to implement a "last updated" component that would inform users how stale data is across the app

Cons:
- Assumes data will be sourced from a similar endpoint
- Requires another context and provider, or additional features for the existing favorites context

**Solution 2:**
Global timer state so that fetch requests are all made at the same time.

Pros:
- Multiple endpoints could be used and state would update uniformly on pages with results from multiple endpoints
- Easy to implement a "last updated" component that would inform users how stale data is across the app

Cons:
- Slower calls might cause slight delays in updates and cause a stagger
- For this app, there would still be two simultaneous calls to the same endpoint

### #2. Favorites icon is slightly cut off

The "heart" SVG is scaled to 1.1x on hover, which results in the heart being slightly cut off on the right side.

This could be easily fixed by making the default state 0.9x and the hover state 1x, or by adding additional padding on the right. This would also prevent the heart from getting very slightly blurry.

### #3. Grid is not ideal on laptop screens (720px - 950px)

Since the "show more" and "show less" buttons increment and decrement by factors of 8, the 3 column grid is a bit awkward.

**Solution 1:**
Change the factor to 12 so that new rows are always added full.

Pros:
- Extremely fast change

Cons:
- Adding 12 items might be too many for screen sizes with 1 or 2 column rows

**Solution 2:**
Add a function to check screen width and alter the increment/decrement factor to 6 at sub 950px width and an event listener for when the window resizes.

Pros:
- Dynamic solution that can be used to optimize factors on other screen sizes as well. For example, we can calculate the factor so that when we show more/less it always adds or removes exactly 2 rows

Cons:
- Changing the size of an "item" card might require changes to this solution depending on the implementation
- Longer to implement (extra calculations and listeners)

**Solution 3:**
Update the CSS so that the bottom row is centered instead of left aligned.

Pros:
- Relatively quick and easy to implement
- Favorites would look better when there are only 1 or 2 favorites selected

Cons:
- Adding new row items would still be inconsistent for 3 column rows
- Current grid implementation would need to be changed to flexbox

**Solution 4:**
Change the factor to 6 and shrink the width of the 4 column row to 3.

Pros:
- Fast to implement
Cons:
- Changes overall design and layout

### #4. Accessibility Issues

I did not add proper descriptions for some of the interactive elements and focus-visible styles should be more obvious.

### #5. "Total Quantity" shows "0" when the response is null

The API returns null data when it's not applicable or available. The application should reflect this by displaying "N/A" instead of "0" which could be mis-interpreted.

## What I would work on next

1. Fixing above issues
2. Adding remaining tests
3. Adding API key usage to increase alloted hits
4. Adding "last updated" feature or some sort of progress bar to indicate when data was last updated or will be updated
