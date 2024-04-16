import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { TodosContextProvider } from "./contexts/TodosContextProvider";

import MainContent from "./components/MainContent";
import NewTodo from "./components/NewTodo";
import Banner from "./components/Banner";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Title from "./components/Title";

function App() {
    return (
        <ThemeContextProvider>
            <TodosContextProvider>
                <Banner />
                <Layout>
                    <Title />
                    <NewTodo />
                    <MainContent />
                    <Footer />
                </Layout>
            </TodosContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
