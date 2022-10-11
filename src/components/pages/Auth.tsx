import { useEffect } from "react"

import { Authenticator, useAuthenticator,} from "@aws-amplify/ui-react"
import { I18n } from "aws-amplify"
import { translations } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

I18n.putVocabularies(translations);

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