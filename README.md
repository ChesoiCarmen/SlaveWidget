# SlaveWidget

## Project Structure
* *frontend* - this is where (shockingly) the frontend will reside. Potentially we might need to find a better name; thought I'm fine with it for now. The Repository itself can have a name indicating what Widget is it for.
* *bff* 
  - this is the backend for frontend. It should reside in the same repository as the frontend since the BFF is dedicated to the frontend and they can't actually live separately
  - it's going to be some sort of API service (Flask for Python apps for instance)
  - at the moment it is just an empty folder

## Deployment

The Frontend and BFFs should be deployed separately: 2 independent services, 2 containers, etc

## Idea

- most of this widget is just a SPA: couple of labels, couple of input fields and a label to show the result
- the 'chooser' is actually another component that we want to integrate on the client side (?)
- ideally, we would have 2 running components
  * 1 MasterWidget (see https://github.com/ChesoiCarmen/MasterWidget )
  * 1 SlaveWidget ( current )
  * the selection in the MasterWidget should trigger a selection in the selector component on the SlaveWidget
  (this si where I said that the SlaveWidget is lacking some pu/sub mechanism to actually broadcast an event of type lets call it    SelectionChanged)
  * after a selection is triggered on the SlaveWidget, the result is automatically calculated in this case (might have to be on request for other operations that take longer due to lets say current Dragon architecture)
  
## TODO
  - import the MasterComponent. See https://github.com/ChesoiCarmen/SlaveWidget/blob/e51478c8a5bd2d168543a60e71fac27811c3338c/frontend/src/App.js#L46 and https://github.com/ChesoiCarmen/SlaveWidget/blob/e51478c8a5bd2d168543a60e71fac27811c3338c/frontend/public/index.html#L21
  - listen for published events

## Example

This particular Widget is not that exciting: just a calculator

![UI](https://github.com/ChesoiCarmen/SlaveWidget/blob/master/snippet.PNG)
