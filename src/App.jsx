import {QueryClient, QueryClientProvider, useIsFetching} from "@tanstack/react-query";
import '@ant-design/v5-patch-for-react-19';
import {Outlet} from "react-router-dom";
import {Spinner} from "./components/Spinner/Spinner.jsx";
import {ConfigProvider} from "antd";
import locale from "antd/locale/pt_BR";

function AppContent() {
    const isFetching = useIsFetching();

    return (
        <>
            {isFetching > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100dvh' }}>
                    <Spinner/>
                </div>
            )}

            <div style={{ display: isFetching > 0 ? 'none' : 'block' }}>
                <Outlet />
            </div>
        </>
    );


}

function App() {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <ConfigProvider locale={locale}>
                <AppContent />
            </ConfigProvider>
        </QueryClientProvider>
    );
}

export default App;