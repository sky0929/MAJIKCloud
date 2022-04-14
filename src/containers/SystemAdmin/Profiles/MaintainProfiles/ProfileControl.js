import React, { Fragment } from "react";
import ReactGrid from "../../../../components/ReactGrid";
import LaunchIcon from '@mui/icons-material/Launch';

const ProfileControl = () => {
  const columns = [
    {
      name: "id",
      header: "Id",
      defaultVisible: false,
      defaultWidth: 60,
      type: "number"
    },
    { name: "type", header: "Type", defaultFlex: 1 },
    {
      name: "item",
      header: "Item",
      defaultFlex: 1,
      render: ({ value }) => { return <span>{value} <LaunchIcon sx={{float: 'right'}}/></span>}
    },
    {
      name: "description",
      header: "Description",
      defaultFlex: 1
    }
  ];

  const data = [
    { type: "ASM", item: "ASMGT", description: "Asset Management" },
    { type: "ASM", item: "Fixed", description: "Fixed Assets Master File" },
    { type: "ASM", item: "LEASE", description: "Leasehold Improvments" }
  ];

  return (
    <Fragment>
      <ReactGrid
        columns={columns}
        data={data}
        selectedRow={row => {
          console.log(row);
        }}
      />
    </Fragment>
  );
};

export default ProfileControl;
