function App() {

  const handlePrint = () =>{
    window.print()
  }
  return(<>
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      <header className="flex flex-col items-center justify-center mb-5">
        <div>
          <h2 className="font-bold tracking-wide text-4xl mb-3">InvoiceApp</h2>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
            <li><button className="btn btn-download">Download</button></li>
            <li><button className="btn btn-send">Send</button></li>
          </ul>
        </div>
      </header>
      {/*End of header */}

      {/*Your details */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">Yash Ashok Gokakkar</h2>
        <p>Your Address</p>
      </section>
      {/* End of your details*/}

      {/*CLient Details */}
      <section>
      <h2 className="text-xl uppercase">Client's Name</h2>
      <p>Client's address</p>
      </section>
      

      {/*End of CLient Details */}

      {/*Dates */}
      <article className="mt-5 flex items-end justify-end">
        <ul>
          <li><sapn className="font-bold">Invoice number :</sapn></li>
          <li><span className="font-bold">Invoice date :</span> </li>
          <li><span className="font-bold">Due date :</span> </li>
        </ul>
      </article>
      {/*End of dates */}

      {/*Table */}
        <div className="my-5">
          this is the table
        </div>
      {/*End of table */}

      {/*Notes */}
        <section className="mb-5">
          <p>Notes to the client...</p>
        </section>
      {/*End of notes */}

      {/*Footer */}
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Your name :</span> Yash Gokakkar</li>
          <li><span className="font-bold">Your email :</span> yashgokakkar@gmail.com</li>
          <li><span className="font-bold">Phone number :</span> 7499822665</li>
          <li><span className="font-bold">Bank :</span> Bank Of India</li>
          <li><span className="font-bold">Account holder :</span> Yash Gokakkar</li>
          <li><span className="font-bold">Account number :</span> XXXXXX099 </li>
          <li><span className="font-bold">Website :</span> www.boi.com</li>
        </ul>
      {/*End of footer */}

    </main>
  </>);
  
}

export default App;
