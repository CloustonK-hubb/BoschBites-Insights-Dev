//import { Refine, WelcomePage } from "@refinedev/core";
//import { dataProvider } from "./providers/data-providers";
/*import { ShowProduct } from "./providers/Pages/products";

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      <ShowProduct />
    </Refine>
  );
}

export default App;*/

import { Refine } from "@refinedev/core";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { RefineSnackbarProvider, RefineThemes } from "@refinedev/mui";
import { dataProvider } from "./providers/data-providers";
import { ProductList } from "./providers/pages/products";

function App() {
  return (
    <ThemeProvider theme={RefineThemes.Blue}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider}
          resources={[
            {
              name: "products",
              list: "/products",
            },
          ]}
        >
          <ProductList />
        </Refine>
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
}

export default App;