import "reflect-metadata"; // this should be the first import
import { useCallback, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();

    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        let rootItem: HTMLElement = document.getElementById("root")!;
        rootItem.scrollTop = 0;
    }, [location.pathname]);

    const getAppTemplate = useCallback(() => (
        <div className="content-wrapper">
            <div className="pt-3" />
            <section className="content">
                <Outlet />
            </section>
        </div>
    ), []);

    return <div className="wrapper">{getAppTemplate()}</div>
}

export default Main;