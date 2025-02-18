import React from 'react'

export default function MessageSet({ title, content }) {
  return (
    <div className="bg-red-300 not-prose">
      <h3>{title} - DDD</h3>
      <p>{content}</p>
    </div>
  )
}
