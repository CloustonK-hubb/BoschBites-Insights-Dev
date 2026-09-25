import { Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./providers/data-providers";
import { ShowProduct } from "./providers/Pages/products";

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      <ShowProduct />
    </Refine>
  );
}

export default App;