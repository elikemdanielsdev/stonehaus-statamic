import React from 'react'
import { SITE_URL } from '@/utils';

export default function InfoSet({ title, content, image }) {
  return (
    <div className="bg-amber-200 not-prose">
      <h3>{title} - DDD</h3>
      <p>{content}</p>
      <img src={`${SITE_URL}/${image}`} alt="" />
    </div>
  )
}
