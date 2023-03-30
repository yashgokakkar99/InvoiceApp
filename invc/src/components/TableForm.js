import React from "react";
import { useEffect } from "react";
import {v4 as uuidv4} from "uuid";

function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList}) {

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newItems = {
            id:uuidv4(),
            description:description,
            quantity:quantity,
            price:price,
            amount:amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list,newItems])
    }

    useEffect(()=>{
        const calculateAmount = (amount)=>{
            setAmount(quantity * price);
        }
        calculateAmount(amount)
    },[price,amount,quantity,setAmount])
    
  return (
    <>
      <form onsubmit={handleSubmit}>
      <div className="flex flex-col">
      <label for="description">Item description</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      </div>

      <article className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
      <label for="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      </div>

      <div className="flex flex-col">
      <label for="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      </div>

      <div className="flex flex-col">
      <label for="amount">Amount</label>
      <p>{amount}</p>
      </div>
      </article>
      <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300" type="submit">Add Item</button>
      </form>
    </>
  );
}

export default TableForm;
