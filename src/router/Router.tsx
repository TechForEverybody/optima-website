import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from './routes'
import { useLayoutEffect } from 'react'

type Props = {}

export default function Router({ }: Props) {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


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