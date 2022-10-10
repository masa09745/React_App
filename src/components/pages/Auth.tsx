import { Authenticator, useAuthenticator, } from "@aws-amplify/ui-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Auth = () => {
  const { route } = useAuthenticator((context) => [context.route])
  const navigate = useNavigate()

  useEffect (() => {
    if (route === 'authenticated') {
      navigate("/ships", {replace: true})
    }
  }, [route, navigate])

  return (
    <Authenticator></Authenticator>
  )

}