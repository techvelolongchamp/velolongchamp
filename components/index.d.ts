declare module '*.JPG'

declare interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  _sys: { filename: string }
}
