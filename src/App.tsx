import React, { useContext }  from "react"
import { BrowserRouter, Routes, Route, Navigate }  from "react-router-dom"

import { CommonLayout } from "components/layouts/CommonLayout"
import { Home } from "components/pages/Home"
import { SignIn } from "components/pages/SignIn"
import { SignUp } from "components/pages/SignUp"
import { Ships } from "components/pages/Ships"
import { ShipDetails } from "components/pages/ShipDetails"
import { CreateMaintenance } from "components/pages/CreateMaintenance"

export const App: React.FC = () =>  {

  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ships" element={ <Ships/>}>
            <Route path=":shipId" element={<ShipDetails />}/>
            <Route path=":shipId/create" element={<CreateMaintenance />} />
          </Route>
          <Route  path="/" element={ <Home /> }/>
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  )
};