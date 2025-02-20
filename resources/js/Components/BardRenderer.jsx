import React from "react";
import { SITE_URL } from '@/utils';
import MessageSet from "@/Components/Sets/MessageSet";
import AnnouncementSet from "@/Components/Sets/AnnouncementSet";
import InfoSet from "@/Components/Sets/InfoSet";
import VideoSet from "@/Components/Sets/VideoSet";

// Content transformation
const transformContent = (content) => {
  if (!Array.isArray(content)) return [];

  return content.map((node) => {
    if (node.type === "image" && node.attrs?.src) {
      node.attrs.src = node.attrs.src.replace("asset::assets::", SITE_URL);
    }
    if (node.type === "paragraph" && node.content?.length === 1 && node.content[0].type === "image") {
      node.content[0].attrs.src = node.content[0].attrs.src.replace("asset::assets::", SITE_URL);
      return node.content[0];
    }
    return node;
  });
};

// Bard content renderer
export default function BardRenderer({ content }) {
  if (!content) return null;

  const transformedContent = transformContent(content);

  const renderNode = (node, index) => {
    if (!node || !node.type) return null;

    switch (node.type) {
      case "paragraph":
        return <p key={index}>{node.content?.map(renderNode)}</p>;

      case "heading": {
        const level = node.attrs.level;
        switch (level) {
          case 1:
            return <h1 key={index}>{node.content?.map(renderNode)}</h1>;
          case 2:
            return <h2 key={index}>{node.content?.map(renderNode)}</h2>;
          case 3:
            return <h3 key={index}>{node.content?.map(renderNode)}</h3>;
          case 4:
            return <h4 key={index}>{node.content?.map(renderNode)}</h4>;
          case 5:
            return <h5 key={index}>{node.content?.map(renderNode)}</h5>;
          case 6:
            return <h6 key={index}>{node.content?.map(renderNode)}</h6>;
          default:
            return null; // Or perhaps a default heading (e.g., h3) or an error.
        }
      }

      case "text":
        let text = node.text;
        if (node.marks) {
          node.marks.forEach((mark) => {
            switch (mark.type) {
              case "bold":
                text = <strong key={index}>{text}</strong>;
                break;
              case "italic":
                text = <em key={index}>{text}</em>;
                break;
              case "code":
                text = <code key={index}>{text}</code>;
                break;
              case "link":
                text = (
                  <a key={index} href={mark.attrs.href} target={mark.attrs.target || "_self"} title={mark.attrs.title}>
                    {text}
                  </a>
                );
                break;
            }
          });
        }
        return text;

      case "image":
        return <img key={index} src={node.attrs.src} alt={node.attrs.alt || ""} />;

      case "blockquote":
        return <blockquote key={index}>{node.content?.map(renderNode)}</blockquote>;

      case "bulletList":
        return <ul key={index}>{node.content?.map(renderNode)}</ul>;

      case "orderedList":
        return <ol key={index}>{node.content?.map(renderNode)}</ol>;

      case "listItem":
        return <li key={index}>{node.content?.map(renderNode)}</li>;

      case "set":
        const { type, ...values } = node.attrs.values;
        switch (type) {
          case "message":
            return <MessageSet key={index} {...values} />;
          case "announcement":
            return <AnnouncementSet key={index} {...values} />;
          case "info":
            return <InfoSet key={index} {...values} />;
          case "video":
            return <VideoSet key={index} {...values} />;
          default:
            return null;
        }

      default:
        return null;
    }
  };

  return <div className="prose max-w-none">{transformedContent.map(renderNode)}</div>;
};