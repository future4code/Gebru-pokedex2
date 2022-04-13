import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "xx";
import Page2 from "xx";
import Page3 from "xx";

export const Router = () => {
   
   
return (

<BrowserRouter>      

<Routes>
   
   <Route index element = {<xx/>}/>
   <Route path="x" element = {<xxx/>}/>
   <Route path="x" element = {<xxx/>}/>
   <Route path="x" element = {<xxx/>}/>
   <Route path="*" element = {<ErrorPage/>}/>
      
</Routes>
      
</BrowserRouter>

   ) 
}








