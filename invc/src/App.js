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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table />

            <Notes notes={notes} />

            <Footer
              name={name}
              email={email}
              bankName={bankName}
              bankAccount={bankAccount}
              phone={phone}
              website={website}
            />
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
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label for="name">Enter your name </label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="address">Enter your address </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label for="email">Enter your email </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="website">Enter your website </label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter yourwebsitet"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="phone">Enter your phone </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label for="bankName">Enter yourbankName</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bankName"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="bankAccount">Enter yourbankAccount </label>
                  <input
                    type="number"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bankAccount"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  ></input>
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label for="clientName">Enter your clientName </label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your clientName"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="clientAddress">Enter your clientAddress </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your clientAddress"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  ></input>
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label for="invoiceNumber">Enter your invoiceNumber </label>
                  <input
                    type="number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter your invoiceNumber"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="invoiceDate">Enter your invoiceDate </label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter your invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="dueDate">Enter your dueDate </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter your dueDate"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  ></input>
                </div>
              </article>

              <label for="notes">Enter your notes </label>
              <textarea
                cols="30"
                rows="10"
                name="notes"
                id="notes"
                placeholder="Enter your notes"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

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
