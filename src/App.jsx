import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Outlet} from "react-router-dom";

function App() {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client} >
            <Outlet/>
        </QueryClientProvider>
    )
}

export default App
