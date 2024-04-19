import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { TodosContextProvider } from "./contexts/TodosContextProvider";
import { useScreenWidth } from "./hooks/useScreenWidth";
import { MOBILE_BREAKPOINT } from "./config/config";

import FiltersComponent from "./components/FiltersComponent";
import MainContent from "./components/MainContent";
import NewTodo from "./components/NewTodo";
import Banner from "./components/Banner";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Title from "./components/Title";
import { DeviceContextProvider } from "./contexts/DeviceContextProvider";

function App() {
    const width = useScreenWidth();
    const device = width >= MOBILE_BREAKPOINT ? "desktop" : "mobile";

    return (
        <ThemeContextProvider>
            <DeviceContextProvider>
                <TodosContextProvider>
                    <Banner />
                    <Layout>
                        <Title />
                        <NewTodo />
                        <MainContent />
                        {device === "mobile" && <FiltersComponent />}
                        <Footer />
                    </Layout>
                </TodosContextProvider>
            </DeviceContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
