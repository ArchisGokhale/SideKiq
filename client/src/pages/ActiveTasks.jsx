import React from 'react'
import { useData } from '../contexts/DataContext'

export default function ActiveTasks(){
  const { state } = useData()
  const active = state.tasks.filter(t=> t.status !== 'open')

  return (
    <div>
      <h2>Active Tasks</h2>
      {active.length===0 && <div>No active tasks yet.</div>}
      <ul>
        {active.map(t=> (
          <li key={t.id} style={{marginBottom:8}}>
            <strong>{t.title}</strong> — {t.status}
          </li>
        ))}
      </ul>
    </div>
  )
}
