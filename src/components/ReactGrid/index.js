import React, { useState, useCallback } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "./index.css";

const ReactGrid = ({
  columns,
  data = [],
  gridStyle = { minHeight: 200 },
  idProperty = "id",
  enableSelection = true,
  selectedRow
}) => {
  const onSelectionChange = useCallback((row) => {
    selectedRow(row);
  }, [])

  return (
    <ReactDataGrid
      idProperty={idProperty}
      columns={columns}
      dataSource={data}
      style={gridStyle}
      enableSelection={enableSelection}
      onSelectionChange={onSelectionChange}
    />
  );
};

export default ReactGrid;
