import React from "react";

import { Item } from "../../atoms/Item/Item";

export const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          titleItem={item.titleItem}
          productName={item.productName}
          description={item.description}
          urlImg={item.urlImg}
          stockNumber={item.stockNumber}
        />
      ))}
    </>
  );
};
