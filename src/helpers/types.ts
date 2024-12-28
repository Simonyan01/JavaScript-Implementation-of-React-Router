export interface IRoute {
  path: string
  element: React.ReactNode
  pattern?: RegExp
}

export interface IProviderProps {
  router: IRoute[]
}

export interface IContext {
  navigate: (path: string) => void
}

export interface ILink {
  to: string
  children: React.ReactNode
  target?: string
  className?: string
  [key: string]: unknown
}
