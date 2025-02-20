import BardRenderer from '@/Components/BardRenderer';
import SeoMeta from '@/Components/SeoMeta';
import { SITE_URL } from '@/utils';

export default function Index({ page }) {
  console.log(page)
  return (
    <>
      <SeoMeta
        title={page.title}
        meta_title={page.meta_title}
        meta_image={`${SITE_URL}/${page.meta_image}`}
      />
      <div>Index - {page.title}</div>
      <BardRenderer content={page.content} />
    </>
  )
}
