import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

type Props = {}

export default function Router({ }: Props) {
    return (
        <Routes>
            {
                routes.map((route) => {
                    return (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    )
                })
            }
        </Routes>
    )
}