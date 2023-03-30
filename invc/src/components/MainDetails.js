import React from 'react'

function MainDetails({name, address}) {
  return (
    <>
    <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase font-bold">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  )
}

export default MainDetails
