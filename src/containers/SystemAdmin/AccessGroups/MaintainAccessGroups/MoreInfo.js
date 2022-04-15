import React, { useState } from "react";
import AccessGroupMoreInfo from "./BrowseTaps/AccessGroupMoreInfo";

const UserField = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <fragment>
      <AccessGroupMoreInfo show={open} handleClose={handleClose} />
    </fragment>
  );
};

export default UserField;
