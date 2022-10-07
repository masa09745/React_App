import React, { useContext }  from "react"
import { BrowserRouter, Routes, Route, Navigate }  from "react-router-dom"

import { CommonLayout } from "components/layouts/CommonLayout"
import { Home } from "components/pages/Home"
import { SignIn } from "components/pages/SignIn"
import { SignUp } from "components/pages/SignUp"
import { Ships } from "components/pages/Ships"
import { ShipDetails } from "components/pages/ShipDetails"
import { CreateMaintenance } from "components/pages/CreateMaintenance"

import { useAuthenticator } from "@aws-amplify/ui-react"
import { Authenticator, } from "@aws-amplify/ui-react"
import { RemoveRoadOutlined } from "@mui/icons-material"

import {Amplify} from 'aws-amplify';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export const App: React.FC = () =>  {
  const { route } = useAuthenticator((context) => [context.route ])

  const Private = ({children}:{children:JSX.Element }) => {
    if (route !== "authenticated") {
      return <Navigate to="/signin" replace/>;
    }else{
      return children
    }
  }

  return(
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ships" element={<Private><Ships/></Private>}>
            <Route path=":shipId" element={<ShipDetails />}/>
            <Route path=":shipId/create" element={<CreateMaintenance />} />
          </Route>
          <Route  path="/" element={<Home />}/>
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  )
};