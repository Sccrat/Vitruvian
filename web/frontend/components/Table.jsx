import {
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
} from '@shopify/polaris';
import React from 'react';
// import { React, useState, useEffect } from "react";

export function Table({data}) {

    console.log(data,'vealo');


  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(data);

  const rowMarkup = data.map(
    ({id, username}, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextStyle variation="strong">{id}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{username}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={data.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Id'},
          {title: 'Usuario'}
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}