import { IAuthor as IAuthor } from './users'

export interface IReactions {
  [reaction: string]: number
  thumbsUp: number
  hooray: number
  heart: number
  rocket: number
  eyes: number
}

export interface IComment {
  _id: string
  text: string
  createdAt: string
  author: {
    _id: string
    avatarImg: string
    fullName: string
  }
}

export interface IPost {
  _id: string
  title: string
  text: string
  imageUrl?: string
  createdAt: string
  tags: string[]
  comments: IComment[]
  author: Pick<IAuthor, 'fullName' | 'avatarImg' | '_id'>
  viewsCount: number
}

export interface IPosts {
  items: IPost[]
  status: 'idle' | 'loading' | 'fulfiled' | 'failed'
  error: string | null
}

export interface ITags {
  items: string[]
  status: 'idle' | 'loading' | 'fulfiled' | 'failed'
  error: string | null
}

export interface IPostSliceInitState {
  status: 'idle' | 'loading' | 'fulfiled' | 'failed'
  error: string | null
  posts: IPosts
}
