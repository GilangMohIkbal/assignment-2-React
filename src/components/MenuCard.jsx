import React, { memo } from "react";
export default memo(function MenuCard({ menu }) {
  return (
    <tr>
      <td>{menu.name}</td>
      <td>{menu.value + menu.value * (5 / 100)}</td>
      <td>{menu.value}</td>
      <td>{menu.value - menu.value * (5 / 100)}</td>
    </tr>
  );
});
