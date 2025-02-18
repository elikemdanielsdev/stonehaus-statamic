import ReactMarkdown from 'react-markdown';
import BardRenderer from '../Components/BardRenderer';

export default function Index({ page }) {
  console.log(page.content)
  return (
    <>
      <div>Index - {page.title} - DDD</div>
      <BardRenderer content={page.content} />
    </>
  )
}
