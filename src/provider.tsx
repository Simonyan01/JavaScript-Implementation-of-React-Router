import { InputUser } from "@helpers/types"
import { FormContext } from "@helpers/context"
import { useForm } from "@hooks/useForm"

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { register, handleSubmit, reset, formState } = useForm<InputUser>()

    return (
        <FormContext.Provider value={{ register, handleSubmit, reset, formState }}>
            {children}
        </FormContext.Provider>
    )
}
