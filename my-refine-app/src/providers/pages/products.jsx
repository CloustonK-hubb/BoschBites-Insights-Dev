/*import { useOne } from "@refinedev/core";

export const ShowProduct = () => { //JSX compinent names must begin with a capital letter or it is treated as plain HTML tags instead 
  const {
    result,
    query: { isLoading },
  } = useOne({ resource: "products", id: 123 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Product name: {result?.name}</div>;
};*/

// src/pages/products.jsx
import { useDataGrid, List } from "@refinedev/mui";
import { DataGrid } from "@mui/x-data-grid";

export const ProductList = () => {
  const { dataGridProps } = useDataGrid({
    resource: "products",
  });

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "material", headerName: "Material", flex: 1 },
    { field: "price", headerName: "Price", width: 120 },
  ];

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};