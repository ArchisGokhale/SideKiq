import React from 'react'
import { useData } from '../contexts/DataContext'

function downloadCSV(rows, filename='earnings.csv'){
  const csv = rows.map(r=> Object.values(r).map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n')
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'})
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}

export default function Earnings(){
  const { state } = useData()
  const total = state.tasks.reduce((s,t)=> s + (t.status==='claimed'? t.pay:0), 0)

  return (
    <div>
      <h2>Earnings</h2>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{fontSize:28,fontWeight:700}}>${total}</div>
        <button className="btn btn-outline" onClick={()=>downloadCSV(state.tasks.map(t=>({id:t.id,title:t.title,pay:t.pay,status:t.status})))}>Export CSV</button>
      </div>
      <ul style={{marginTop:12}}>
        {state.tasks.map(t=> <li key={t.id}>{t.title} — ${t.pay} — {t.status}</li>)}
      </ul>
    </div>
  )
}
