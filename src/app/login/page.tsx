'use client'
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { CustomInput } from "@/components"
import { userStore, useGetSession, LoginService } from "@/core"

const Login = () => {
  const { user, userToken, getSession } = userStore()
  const { control, handleSubmit } = useForm()
  const { getSessionMutate } = useGetSession()
  const { mutateAsync: loginUser } = useMutation((data) => LoginService.post('', data), {
    onSuccess: (data) => {
      localStorage.setItem('guildUserToken', data?.results.token)
      getSession({ username: data?.results?.username, token: data?.results?.token })
    }
  })

  useEffect(() => {
    console.log('USER: ', user)
  }, [user])

  useEffect(() => {
    let token = localStorage.getItem('guildUserToken') || null
    getSessionMutate(token as string)
  }, [getSessionMutate])

  return (
    <div onSubmit={handleSubmit(loginUser as never)}>
      <form style={{ width: '300px', margin: '50px auto' }}>
        <CustomInput label="Usuario" name="username" control={control} />
        <CustomInput label="Contraseña" name="password" type="password" control={control} />
        <button type="submit">Iniciar Sesión</button>
        <button type="button" onClick={() => console.log({ user, userToken })}>GET SESSION</button>
      </form>
    </div>
  )
}

export default Login
