import { ReactNode } from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";

import "./Layout.scss";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app-layout">
            <Header />
            <main className="app-layout__main">
                <aside className="app-layout__main__left">
                    <Info />
                </aside>
                <aside className="app-layout__main__right">
                    <div className="app-layout__main__right__main">
                        {children}
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default Layout;
