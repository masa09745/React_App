import { Authenticator, } from "@aws-amplify/ui-react"

export const SignIn = () => {

  return (
    <Authenticator hideSignUp={true}></Authenticator>
  )

}