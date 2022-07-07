import React, { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Spinner, Center } from '@chakra-ui/react'
import { GlobalLayout } from '../layout'
import { Home, Release } from '../pages'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'

export const routesObject = {
  home: 'home',
  release: 'release',
}

const { home, release } = routesObject

const RoutesDeclaration = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
          <Route
            path={`/${home}`}
            element={
              <GlobalLayout>
                <Home />
              </GlobalLayout>
            }
          />
          <Route
            path={`/${release}`}
            element={
              <GlobalLayout>
                <Release />
              </GlobalLayout>
            }
          />
        <Route
          path="*"
          element={<Navigate to={`/${home}`} replace />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <Center height="100%">
          <Spinner h={20} w={20} />
        </Center>  
      }
    >
      <RoutesDeclaration />
    </Suspense>
  </BrowserRouter>
)
