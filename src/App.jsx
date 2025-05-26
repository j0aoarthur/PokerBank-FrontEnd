import {QueryClient, QueryClientProvider, useIsFetching} from "@tanstack/react-query";
import {Outlet} from "react-router-dom";
import {Spinner} from "./components/Spinner/Spinner.jsx";

function AppContent() {
    const isFetching = useIsFetching();

    return (
        <>
            {isFetching > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
            <AppContent />
        </QueryClientProvider>
    );
}

export default App;