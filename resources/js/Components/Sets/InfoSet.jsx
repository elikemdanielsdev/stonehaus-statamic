import React from 'react'

const siteUrl = import.meta.env.VITE_SITE_URL;
console.log(siteUrl);

export default function InfoSet({ title, content, image }) {
  return (
    <div className="bg-amber-200 not-prose">
      <h3>{title} - DDD</h3>
      <p>{content}</p>
      <img src={`${siteUrl}/${image}`} alt="" />
    </div>
  )
}
