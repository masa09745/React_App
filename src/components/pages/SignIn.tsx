import { Authenticator, useAuthenticator, } from "@aws-amplify/ui-react"
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export const SignIn = () => {
  const { route } = useAuthenticator((context) => [context.route])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect (() => {
    if (route === 'authenticated') {
      navigate("/ships", {replace: true})
    }
  }, [route, navigate])

  return (
    <Authenticator hideSignUp={true}></Authenticator>
  )

}