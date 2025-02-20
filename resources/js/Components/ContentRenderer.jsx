import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Image from '@tiptap/extension-image';
import Bold from '@tiptap/extension-bold';
import Link from '@tiptap/extension-link';
import Italic from '@tiptap/extension-italic';
import Code from '@tiptap/extension-code';
import MessageSet from './Sets/MessageSet';
import AnnouncementSet from './Sets/AnnouncementSet';
import InfoSet from './Sets/InfoSet';
import VideoSet from './Sets/VideoSet';

const SITE_URL = import.meta.env.VITE_SITE_URL;

const transformContent = (content) => {
  if (!Array.isArray(content)) return [];

  return content.map((node) => {
    if (node.type === 'image' && node.attrs?.src) {
      node.attrs.src = node.attrs.src.replace('asset::assets::', SITE_URL);
    }
    if (node.type === 'paragraph' && node.content?.length === 1 && node.content[0].type === 'image') {
      node.content[0].attrs.src = node.content[0].attrs.src.replace('asset::assets::', SITE_URL);
      return node.content[0];
    }
    return node;
  });
};

const ContentRenderer = ({ content }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading,
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      Image,
      Bold,
      Link,
      Italic,
      Code,
    ],
    content,
    editable: false,
  });

  if (!content) return null;

  const transformedContent = transformContent(content);

  const renderNode = (node, index) => {
    if (!node || !node.type) return null;

    switch (node.type) {
      case 'set':
        const { type, ...values } = node.attrs.values;
        switch (type) {
          case 'message':
            return <MessageSet key={index} {...values} />;
          case 'announcement':
            return <AnnouncementSet key={index} {...values} />;
          case 'info':
            return <InfoSet key={index} {...values} />;
          case 'video':
            return <VideoSet key={index} {...values} />;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  return (
    <div className="prose max-w-none">
      <EditorContent editor={editor} />
      {transformedContent.map(renderNode)}
    </div>
  );
};

export default ContentRenderer;
