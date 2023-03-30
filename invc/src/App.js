import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails />

            <ClientDetails />

            <Dates />

            <Table />

            <Notes />

            <Footer />
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
          {/*name, address, client name, client address,email, phone number, bank name, banck account number, account holder, website invoice number, invoice date, due date, table, notes */}
            <div className="flex flex-col justify-center">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your name"
                autoComplete="off"
              ></input>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
