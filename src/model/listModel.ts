export interface ILists {
  todos: IList[]
  total: number
  skip: number
  limit: number
}

export interface IList {
  id: number
  todo: string
  completed: boolean
  userId: number
}
