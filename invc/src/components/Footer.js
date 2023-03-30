import React from 'react'

function footer({name,email,phone,bankName,bankAccount,website}) {
  return (
    <>
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Your name :</span>{name}</li>
          <li><span className="font-bold">Your email :</span>{email}</li>
          <li><span className="font-bold">Phone number :</span>{phone}</li>
          <li><span className="font-bold">Bank :</span>{bankName}</li>
          <li><span className="font-bold">Account holder :</span>{name}</li>
          <li><span className="font-bold">Account number :</span>{bankAccount}</li>
          <li><span className="font-bold">Website :</span><a href={website} target="_blank" rel="noreferrer noreopenner">{website}</a></li>
        </ul>
        </footer>
    </>
  )
}

export default footer
