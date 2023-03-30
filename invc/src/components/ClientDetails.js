import React from 'react'

function ClientDetails({clientName, clientAddress}) {
  return (
    <>
        <section>
      <h2 className="text-xl uppercase">{clientName}</h2>
      <p>{clientAddress}</p>
      </section>
    </>
  )
}

export default ClientDetails
