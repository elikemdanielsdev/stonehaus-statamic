import React from 'react'

export default function AnnouncementSet({ content }) {
  return (
    <div className="bg-indigo-200 text-indigo-950 p-2 rounded-lg not-prose">
      <p>{content}</p>
    </div>
  )
}
