import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import InvoicesList from "./invoices-list";
import '../assets/styles/App.css';

const App = () => (
  <ToastProvider
    autoDismissTimeout={6000}
    //components={{ Toast: MyCustomToast }}
    placement="bottom-center"
  >
    <InvoicesList />
  </ToastProvider>
);

export default App;
