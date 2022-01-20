import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.log('You clicked a breadcrumb.');
}

function MUIBreadcrumbs() {
  return (
    <div>
      <div onClick={handleClick}>
        <Breadcrumbs>
          <Link href="/mui">MUI</Link>
          <Link href="/">Core</Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default MUIBreadcrumbs;
