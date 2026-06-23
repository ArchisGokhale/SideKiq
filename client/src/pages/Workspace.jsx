import React, {useState} from 'react'
import { useData } from '../contexts/DataContext'

export default function Workspace(){
  const { state } = useData()
  const active = state.tasks.find(t=>t.status==='claimed')
  const [msgs, setMsgs] = useState([ {from:'system', text:'Welcome to the workspace.'} ])
  const [value, setValue] = useState('')

  function send(){
    if(!value.trim()) return
    setMsgs(m=>[...m,{from:'me',text:value}])
    setValue('')
  }

  return (
    <div>
      <h2>Workspace</h2>
      {active ? (
        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:12}}>
          <div style={{background:'rgba(255,255,255,0.02)',padding:12,borderRadius:8}}>
            <h3>{active.title}</h3>
            <div style={{height:320,overflow:'auto',background:'#07111f',padding:12,borderRadius:6}}>
              {msgs.map((m,i)=> <div key={i} style={{marginBottom:8,color:m.from==='me'? '#bfe8d4':'#9fb0cc'}}><strong>{m.from}:</strong> {m.text}</div>)}
            </div>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <input value={value} onChange={e=>setValue(e.target.value)} style={{flex:1,padding:8}} />
              <button className="btn btn-primary" onClick={send}>Send</button>
            </div>
          </div>
          <aside style={{background:'rgba(255,255,255,0.02)',padding:12,borderRadius:8}}>
            <h4>Task Info</h4>
            <p>{active.summary}</p>
            <p><strong>Pay:</strong> ${active.pay}</p>
            <p><strong>ETA:</strong> {active.etaMin} minutes</p>
          </aside>
        </div>
      ) : (
        <div>No active claimed task. Claim one from Opportunities.</div>
      )}
    </div>
  )
}
