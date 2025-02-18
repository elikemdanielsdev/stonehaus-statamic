import React from 'react'

const SITE_URL = import.meta.env.VITE_SITE_URL;

export default function InfoSet({ title, content, image }) {
  return (
    <div className="bg-amber-200 not-prose">
      <h3>{title} - DDD</h3>
      <p>{content}</p>
      <img src={`${SITE_URL}/${image}`} alt="" />
    </div>
  )
}
