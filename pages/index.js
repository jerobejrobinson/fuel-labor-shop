import { useState } from "react"
export default function Home() {
  const [blobUrl, setBlobUrl] = useState()
  const generateWorkOrders = (data) => {
    fetch(`/api/generateWorkOrder`, {
      method: 'post',
      body: JSON.stringify({qty: data.qty})
    })
    .then(res => res.blob())
    .then(blob => {
      setBlobUrl(URL.createObjectURL(blob))
    })

  }
  const [qty, setQty] = useState('0')
  return (
    <div>
      <input type="number" name="qty" id="qty" defaultValue={0} onChange={(e) => { setQty(e.target.value)}}/>
      <button onClick={() => generateWorkOrders({qty})} className="p-4 rounded bg-blue-500 text-white font-bold text-lg">Generate Work Orders</button>
      Generate {`${qty}`} work orders
      <div>
        {blobUrl ? (<a href={blobUrl}> View Work Orders</a>) : ''}
      </div>
    </div>
  )
}
