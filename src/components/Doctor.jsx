import React from "react";
export function Doctor({ item }) {
  return (
    <tr className="border border-blue-500">
      <td class="py-3 px-2  ">{item.name}</td>
      <td class="py-3 px-2 ">{item.specialist}</td>
      <td class="py-3 px-2 ">{item.experience}</td>
      <td class="py-3 px-2 ">{item.rate}</td>
      <td class="py-3 px-2 ">{item.location}</td>
    </tr>
  );
}
