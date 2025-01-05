import { ErrorState } from "@helpers/types"
import { useState } from "react"

export const useForm = <T extends Record<string, unknown>>() => {
  const [values, setValues] = useState<T>({} as T)
  const [error, setError] = useState<ErrorState<T>>({})

  const register = (type: keyof T) => {
    return {
      name: type,
      value: values[type] || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValues({
          ...values,
          [type]: e.target.value,
        }),
    }
  }

  const handleSubmit = (cb: (data: T) => void) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      cb(values)
    }
  }

  const reset = () => {
    setValues({} as T)
    setError({})
  }

  return {
    register,
    handleSubmit,
    formState: { values, error },
    reset,
  }
}
