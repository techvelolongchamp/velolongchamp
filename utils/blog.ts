import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import excerptAst from 'mdast-excerpt'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts')

const asExcerpt =
  (options: {
    pruneLength?: number
    truncate?: boolean
    excerptSeparator?: string
    omission?: string
  }) =>
  (node: any) => {
    return excerptAst(node, options || {})
  }

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}

export async function markdownExcerpt(markdown: string): Promise<string> {
  const result = await remark()
    .use(asExcerpt, { omission: '' })
    .process(markdown)

  return (
    result
      .toString()
      .replace(/#/g, ' ')
      .replace(/\*/g, ' ')
      .replace(/\n/g, ' ')
      .replace(/!?\[(?:.*)\]/g, ' ')
      .replace(/\((?:.*)\)/g, ' ')
      .trim() + '...'
  )
}

export function getPostFiles() {
  return fs.readdirSync(postsDirectory).filter((el) => {
    const extName = path.extname(el)
    return extName === '.md'
  })
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace('.md', '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: { [key: string]: string } = {}

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'date') {
      items[field] = new Date(data[field]).toISOString()
    } else if (field === 'slug') {
      items[field] = realSlug
    } else if (data[field]) {
      items[field] = data[field]
    }
  })

  items.shouldBePublished = data.shouldBePublished

  return items
}

export function getAllPosts(fields: string[] = []) {
  const files = getPostFiles()

  const posts = files
    .map((fileName) => getPostBySlug(fileName, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => post.shouldBePublished)
  return posts
}
