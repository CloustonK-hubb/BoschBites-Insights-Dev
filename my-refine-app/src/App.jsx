import { Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./providers/data-providers";

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      <WelcomePage />
    </Refine>
  );
}

export default App;