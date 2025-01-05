export interface IRoute {
  path: string
  element: React.ReactNode
  pattern?: RegExp
}

export interface IProviderProps {
  router: IRoute[]
}

export interface ILink {
  to: string
  children: React.ReactNode
  target?: string
  className?: string
  [key: string]: unknown
}

export interface IRouterContext {
  navigate: (path: string) => void
}

export interface IFormContext<T> {
  register: (type: keyof T) => {
    name: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  }
  handleSubmit: (cb: (data: T) => void) => (e: React.FormEvent<HTMLFormElement>) => void
  formState: FormState<T>
  reset: (values?: T) => void
}

export type FormState<T> = {
  values: T
  error: {
    [key in keyof T]?: string
  }
}

export type ErrorState<T> = Partial<Record<keyof T, string>>

export type InputUser = { 
  username: string
  price: number
  imageURL: string
  description: string
}
