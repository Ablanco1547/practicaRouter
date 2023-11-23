import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageOne } from './components/pages/page-one/PageOne';
import { PageTwo } from './components/pages/page-two/PageTwo';
import { PageThree } from './components/pages/page-three/PageThree';
import { LinkContextProvider } from './contexts/link';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />,
  },
  {
    path: '/Two',
    element: <PageTwo />,
  },
  {
    path: '/Three',
    element: <PageThree />,
  }
]);

function App() {
  return <LinkContextProvider>
    <RouterProvider router={router} />;
  </LinkContextProvider>
}

export default App;
