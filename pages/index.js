import { useState } from "react"
export default function Home() {
  const [blobUrl, setBlobUrl] = useState('')
  const [qty, setQty] = useState()
  const [base, setBase] = useState()
  const generateWorkOrders = (data) => {
    setBlobUrl('loading')
    fetch(`/api/generateWorkOrder`, {
      method: 'post',
      body: JSON.stringify({qty: data.qty, base: data.base})
    })
    .then(res => res.blob())
    .then(blob => {
      setBlobUrl(URL.createObjectURL(blob))
      setBase('0');
      setQty('0')
    })

  }
  return (
    <div>
      <div>
        <label htmlFor="qty" className="font-bold">Enter Quanity:</label>< br/>
        <input type="number" name="qty" id="qty" onChange={(e) => { setQty(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="base" className="font-bold">Enter Starting Number:</label>< br/>
        <input type="number" name="base" id="base" onChange={(e) => { setBase(e.target.value)}}/>
      </div>
      <button onClick={() => generateWorkOrders({qty, base})} className="p-4 rounded bg-blue-500 text-white font-bold text-lg">Generate Work Orders</button>
      <div>
        {blobUrl != 'loading' && blobUrl != '' ? (<a href={blobUrl}> View Work Orders</a>) : blobUrl == 'loading' ? 'loading' : '' }
      </div>
    </div>
  )
}
