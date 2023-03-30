import React from 'react'

function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <>
    <article className="mt-5 flex items-end justify-end">
        <ul>
          <li className="p-1"><sapn className="font-bold">Invoice number :</sapn>{invoiceNumber}</li>
          <li className="p-1"><span className="font-bold">Invoice date :</span>{invoiceDate}</li>
          <li className="p-1"><span className="font-bold">Due date :</span>{dueDate}</li>
        </ul>
      </article>
    </>
  )
}

export default Dates
