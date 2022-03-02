import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
function App() {
    return (
        <>
            <Header />
            <ItemListContainer>
            <div>pantalon</div>
            <div>camisa</div>
            <div>gorro</div>
            </ItemListContainer>

            <Footer />

        </>
    )

}
export default App