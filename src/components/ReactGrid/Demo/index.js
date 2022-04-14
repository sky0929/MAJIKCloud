import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox'


const gridStyle = { minHeight: 550 }

const columns =  [
  { name: 'id', header: 'Id', defaultVisible: false, defaultWidth: 60, type: 'number' },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'city', header: 'City', defaultFlex: 1 },
  { name: 'age', header: 'Age', defaultFlex: 1, type: 'number' }
];

const people = [
  {id: 1, name: "devesh", city: "jaipur", Age: '30'},
  {id: 2, name: "devesh", city: "jaipur", Age: '30'},
  {id: 3, name: "devesh", city: "jaipur", Age: '30'},
  {id: 4, name: "devesh", city: "jaipur", Age: '30'},
  {id: 5, name: "devesh", city: "jaipur", Age: '30'},
  {id: 6, name: "devesh", city: "jaipur", Age: '30'},
  {id: 7, name: "devesh", city: "jaipur", Age: '30'},
  {id: 8, name: "devesh", city: "jaipur", Age: '30'},
  {id: 9, name: "devesh", city: "jaipur", Age: '30'},
]
const GridMe = () => {
  const [enableSelection, setEnableSelection] = useState(true);
  const [selected, setSelected] = useState(null);

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  return (
    <div>
      <h3>DataGrid with selection and with keyboard navigation</h3>
      <CheckBox
        style={{ marginBottom: 20 }}
        checked={enableSelection}
        onChange={checked => {
          setSelected(null)
          setEnableSelection(checked)
        }}>
          Enable selection
      </CheckBox>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={people}
        enableSelection={enableSelection}
        onSelectionChange={onSelectionChange}
      />
      <p>
        Selected row id: {selected == null ? 'none' : JSON.stringify(selected)}.
      </p>
    </div>
  );
}

export default GridMe;