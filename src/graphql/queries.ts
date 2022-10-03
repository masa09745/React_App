/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMaintenance = /* GraphQL */ `
  query GetMaintenance($id: ID!) {
    getMaintenance(id: $id) {
      id
      title
      contents
      maintenanceMessage
      priority
      completed
      shipId
    }
  }
`;
export const listMaintenances = /* GraphQL */ `
  query ListMaintenances(
    $filter: TableMaintenanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaintenances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        contents
        maintenanceMessage
        priority
        completed
        shipId
      }
      nextToken
    }
  }
`;
