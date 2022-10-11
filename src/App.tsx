import React from "react"
import { BrowserRouter, Routes, Route, Navigate }  from "react-router-dom"

import { CommonLayout } from "components/layouts/CommonLayout"
import { Home } from "components/pages/Home"
import { Auth } from "components/pages/Auth"
import { Ships } from "components/pages/Ships"
import { ShipDetails } from "components/pages/ShipDetails"
import { CreateMaintenance } from "components/pages/CreateMaintenance"

import { useAuthenticator } from "@aws-amplify/ui-react"

import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export const App: React.FC = () =>  {
  const { route } = useAuthenticator((context) => [context.route ])

  const Private = ({children}:{children:JSX.Element }) => {
    if (route !== "authenticated") {
      return <Navigate to="/auth" replace/>;
    }else{
      return children
    }
  }

  return(
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/ships" element={<Private><Ships/></Private>}>
            <Route path=":shipId" element={<ShipDetails />}/>
            <Route path=":shipId/create" element={<CreateMaintenance />} />
          </Route>
          <Route  path="/" element={<Private><Home/></Private>}/>
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  )
};