# exercise-invoice-payments
A simple React app with Node-Js as back-end

## Explanation
This is a React application (using react-semnatic-ui) to demonstrate a simple add & edit flow with a Node.js as its back-end.
The server side uses an In Memory database with static variable named **`Invoices`** in **`./server/routes/index`**.

### Server Installation & Run

for the server side
- Run **`npm i`** to install the packages.
- Run **`npm start`** to start the server.

### React Installation & Run
- Run **`npm i`** to install the packages.
- Run **`npm start`** to start the application.

### Tests
 Under implementation!!!.
 - To run the tests simply execute  **`npm run test`**.

##### Server End points
| method | url | Description |
| --- | --- | --- |
|GET| `/payments/:iban` | to search bank payments based on a specific IBAN  |
|GET| `/invoice` | to get all invoices |
|GET| `/invoice/:id` | to get a specific invoice details |
|POST| `/invoice/:id` | to update a specific invoice |
|POST| `/invoice` | to insert a new invoice |
|DELETE| `/invoice/:id` | to delete a invoice |


### React
##### Explanation
This application has been created by CRNA. There are 2 main screens in this application:
1. InvoicesList View
  1. index.js: it containts all the logic for **`InvoicesList View`**
	2. Layout: Base presentational component for index.js
	3. List: Presentational component to list all the invoices
2. InvoiceModal View
  1. index.js: it containts all the logic for **`InvoiceModal View`**
	2. Layout: Base presentational component for index.js
	3. Invoice-Information: 
    1. index.js: it containts all the logic for **`InvoiceInformation View`**
  	2. Layout: Base presentational component for index.js
  	3. Layout-Desktop: Presentational component for Desktop view port
    4. Layout-Mobile: Presentational component for mobile view port
	4. Payments: 
    1. index.js: it containts all the logic for **`InvoiceInformation View`**
  	2. Layout: Base presentational component for index.js
  	3. Bank-Payments-List: Presentational component to display the search result of `/payments/:iban` endpoint

##### Configuration
Settings for This application are inside a file named **`app.json`**. You can find this file in the following path: **`./client/app.json`**.
**`url`** To set the server side endpoint base url;
**`defaultIBAN`** To set the default IBAN when use doesn't choose `From Bank Account` in **`InvoiceInformation View`**;

### Screen shots
##### Sign in screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-in.png" width="400" aspectRatio="1/2">

##### Sign up screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-up.png" width="400" aspectRatio="1/2">

##### Home - Users screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/users-screen.jpg" width="400" aspectRatio="1/2">

##### User Main Information
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-screen.png" width="400" aspectRatio="1/2">

##### User Addresses
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-address.png" width="400" aspectRatio="1/2">

##### Delete User 
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-delete-account.png" width="400" aspectRatio="1/2">

