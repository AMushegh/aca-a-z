import "./App.css";
import { Layout } from "./components/Layout";
import { CartProvider } from "./providers/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;
