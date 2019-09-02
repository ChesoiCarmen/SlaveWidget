# SlaveWidget

## Project Structure
* *frontend* - this is where (shockingly) the frontend will reside. Potentially we might need to find a better name; thought I'm fine with it for now
* *bff* 
  - this is the backend for frontend. It should reside in the same repository as the frontend since the BFF is dedicated to the frontend and they can't actually live separately
  - it's going to be some sort of API service (Flask for Python apps for instance)
  - at the moment it is just an empty folder

## Deployment

The Frontend and BFFs should be deployed separately: 2 independent services, 2 containers, etc

## Example

This particular Widget is not that exciting: just a drop down selector for operations

![UI](https://github.com/ChesoiCarmen/MasterWidget/blob/master/snippet.PNG)
