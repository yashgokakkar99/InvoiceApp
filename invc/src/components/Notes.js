import React from 'react'

function Notes({notes}) {
  return (
    <>
      <section className="mb-5">
          <p className="lg:w-1/2 text-justify">{notes}</p>
        </section>
    </>
  )
}

export default Notes
