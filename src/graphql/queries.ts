/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMaintenance = /* GraphQL */ `
  query GetMaintenance($id: ID!) {
    getMaintenance(id: $id) {
      id
      title
      contents
      ata
      maintenanceMessage
      priority
      completed
      shipId
      userName
      createdAt
      updatedAt
    }
  }
`;
export const listMaintenances = /* GraphQL */ `
  query ListMaintenances(
    $filter: ModelMaintenanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaintenances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        contents
        ata
        maintenanceMessage
        priority
        completed
        shipId
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const maintenanceByShipId = /* GraphQL */ `
  query MaintenanceByShipId(
    $shipId: Int!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMaintenanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    maintenanceByShipId(
      shipId: $shipId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        contents
        ata
        maintenanceMessage
        priority
        completed
        shipId
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const maintenanceByUserName = /* GraphQL */ `
  query MaintenanceByUserName(
    $userName: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMaintenanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    maintenanceByUserName(
      userName: $userName
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        contents
        ata
        maintenanceMessage
        priority
        completed
        shipId
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
