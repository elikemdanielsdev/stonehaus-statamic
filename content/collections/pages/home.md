---
id: home
blueprint: pages
title: Home
template: home
updated_by: 79d6af5a-902a-414e-a900-fe751ede6345
updated_at: 1739912569
content:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Use this '
      -
        type: text
        marks:
          -
            type: bold
        text: extension
      -
        type: text
        text: ' to '
      -
        type: text
        marks:
          -
            type: italic
        text: render
      -
        type: text
        text: ' text underlined. If you pass <u> tags, or text with inline style attributes setting text-decoration: underline in the editor’s initial content, they all will be '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'https://google.com'
              rel: null
              target: _blank
              title: Google
        text: rendered
      -
        type: text
        text: ' accordingly. This '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'https://cnn.com'
              rel: null
              target: _blank
              title: CNN
          -
            type: bold
        text: sentence
      -
        type: text
        text: ' contains an inline code: '
      -
        type: text
        marks:
          -
            type: code
        text: 'console.log(‘Hello, Africa‘)'
      -
        type: text
        text: ' '
  -
    type: set
    attrs:
      id: m7avr8tw
      values:
        type: announcement
        content: 'This is a short announcement to all those in Accra.'
  -
    type: set
    attrs:
      id: m7ayzs6q
      values:
        type: info
        title: 'Info title'
        content: 'A short sentence about this set.'
        image: pages/ryan-klaus-xa0bloxvxrq-unsplash(1).jpg
  -
    type: set
    attrs:
      id: m7ahhmvk
      values:
        type: message
        title: 'Just a message title'
        content: 'I know the message could be so long.'
  -
    type: paragraph
    content:
      -
        type: image
        attrs:
          src: 'asset::assets::pages/ryan-klaus-xa0bloxvxrq-unsplash(1).jpg'
          alt: 'Simple image'
  -
    type: blockquote
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Just a simple quote'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Be aware that underlined text in the internet usually indicates that it’s a clickable link. Don’t confuse your users with underlined text.'
  -
    type: bulletList
    content:
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: Jesus
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The Apostles'
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: Jerusalem
  -
    type: orderedList
    attrs:
      start: 1
    content:
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: Mango
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: Apricot
      -
        type: listItem
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: Peach
---
