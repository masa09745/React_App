/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMaintenance = /* GraphQL */ `
  mutation CreateMaintenance(
    $input: CreateMaintenanceInput!
    $condition: ModelMaintenanceConditionInput
  ) {
    createMaintenance(input: $input, condition: $condition) {
      id
      title
      contents
      ata
      maintenanceMessage
      priority
      completed
      shipId
      createdAt
      updatedAt
    }
  }
`;
export const updateMaintenance = /* GraphQL */ `
  mutation UpdateMaintenance(
    $input: UpdateMaintenanceInput!
    $condition: ModelMaintenanceConditionInput
  ) {
    updateMaintenance(input: $input, condition: $condition) {
      id
      title
      contents
      ata
      maintenanceMessage
      priority
      completed
      shipId
      createdAt
      updatedAt
    }
  }
`;
export const deleteMaintenance = /* GraphQL */ `
  mutation DeleteMaintenance(
    $input: DeleteMaintenanceInput!
    $condition: ModelMaintenanceConditionInput
  ) {
    deleteMaintenance(input: $input, condition: $condition) {
      id
      title
      contents
      ata
      maintenanceMessage
      priority
      completed
      shipId
      createdAt
      updatedAt
    }
  }
`;
