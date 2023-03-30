import React from "react";

function Table({description, qunatity, price, amount}) {
  
  return (
    <>
      <table width="100%" className="mt-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{description}</td>
            <td>{qunatity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
