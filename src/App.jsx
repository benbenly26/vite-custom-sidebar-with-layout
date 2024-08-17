import React, { useState, createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

export const GlobalContext = createContext();

export default function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div>
        <GlobalContext.Provider
          value={{
            sideBarOpen,
            setSideBarOpen,
          }}
        >
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}
