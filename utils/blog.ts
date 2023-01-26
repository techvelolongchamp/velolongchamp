type RichTextBody = {
  text?: string
  children?: RichTextBody[]
}

const excerptLength = 140

function getExcerpt(body: RichTextBody, excerpt = ''): string {
  if (body.text && body.text.trim().length > 0) {
    return excerpt ? `${excerpt} ${body.text.trim()}` : body.text.trim()
  }
  if (body.children && excerpt.length <= excerptLength) {
    return body.children.reduce(
      (acc, richText) => getExcerpt(richText, acc),
      excerpt
    )
  }
  return excerpt
}

export function generateExcerpt(body: RichTextBody) {
  const text = getExcerpt(body)
  const subText = text.slice(excerptLength, text.length)
  const indexSpace = subText.indexOf(' ')
  return text.slice(0, indexSpace + excerptLength).trim() + '...'
}
