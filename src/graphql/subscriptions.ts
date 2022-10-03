/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMaintenance = /* GraphQL */ `
  subscription OnCreateMaintenance(
    $id: ID
    $title: String
    $contents: String
    $maintenanceMessage: String
    $priority: String
  ) {
    onCreateMaintenance(
      id: $id
      title: $title
      contents: $contents
      maintenanceMessage: $maintenanceMessage
      priority: $priority
    ) {
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
export const onUpdateMaintenance = /* GraphQL */ `
  subscription OnUpdateMaintenance(
    $id: ID
    $title: String
    $contents: String
    $maintenanceMessage: String
    $priority: String
  ) {
    onUpdateMaintenance(
      id: $id
      title: $title
      contents: $contents
      maintenanceMessage: $maintenanceMessage
      priority: $priority
    ) {
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
export const onDeleteMaintenance = /* GraphQL */ `
  subscription OnDeleteMaintenance(
    $id: ID
    $title: String
    $contents: String
    $maintenanceMessage: String
    $priority: String
  ) {
    onDeleteMaintenance(
      id: $id
      title: $title
      contents: $contents
      maintenanceMessage: $maintenanceMessage
      priority: $priority
    ) {
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
