# exercise-invoice-payments
A simple React app with Node-Js as back-end

## Explanation
This is a React application (using react-semnatic-ui) to demonstrate a simple add & edit flow with a Node.js as its back-end.
The goal of this application is to display a list of invoices and user can add, edit or delete the invoices.

On the server side, application uses an In Memory database with static variable named **`Invoices`** in **`./server/routes/index`**.

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
1. **`InvoicesList View`**
  	* *`index.js`*: it containts all the logic for **`InvoicesList View`**
	* *`Layout`*: Base presentational component for index.js
	* *`List`*: Presentational component to list all the invoices
2. **`InvoiceModal View`**
  	* *`index.js`*: it containts all the logic for **`InvoiceModal View`**
	* *`Layout`*: Base presentational component for index.js
	* **`Invoice-Information`**: 
    	1. *`index.js`*: it containts all the logic for **`InvoiceInformation View`**
  		2. *`Layout`*: Base presentational component for index.js
  		3. *`Layout-Desktop`*: Presentational component for Desktop view port
    	4. *`Layout-Mobile`*: Presentational component for mobile view port
	* **`Payments`**: 
    	1. *`index.js`*: it containts all the logic for **`InvoiceInformation View`**
  		2. *`Layout`*: Base presentational component for index.js
  		3. *`Bank-Payments-List`*: Presentational component to display the search result of `/payments/:iban` endpoint

##### Configuration
Settings for this application are inside a file named **`app.json`**. You can find this file in the following path: **`./client/app.json`**.

| key | Description & Values |
| --- | --- |
| url | To set the server side endpoint base url   |
| defaultIBAN | To set the default IBAN when a user doesn't choose `From Bank Account` option in **`InvoiceInformation View`** |

### Screen shots
##### Invoices list - desktop view
<img src="https://github.com/MortiTotti/exercise-invoice-payments/blob/master/screenshots/invoice-list-desktop.png" width="700" aspectRatio="1/2">

##### Invoices list - mobile view
<img src="https://github.com/MortiTotti/exercise-invoice-payments/blob/master/screenshots/invoice-list-mobile.png" width="400" aspectRatio="1/2">

##### Invoice dialog - invoice information view - desktop view
<img src="https://github.com/MortiTotti/exercise-invoice-payments/blob/master/screenshots/invoice-dialog-normal-state.png" width="700" aspectRatio="1/2">

##### Invoice dialog - invoice information view - mobile view
<img src="https://github.com/MortiTotti/exercise-invoice-payments/blob/master/screenshots/invoice-dialog-normal-state-mobile.png" width="400" aspectRatio="1/2">

##### Invoice dialog - payment view
<img src="https://github.com/MortiTotti/exercise-invoice-payments/blob/master/screenshots/invoice-dialog-payment-state.png" width="700" aspectRatio="1/2">
