/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMaintenance = /* GraphQL */ `
  mutation CreateMaintenance($input: CreateMaintenanceInput!) {
    createMaintenance(input: $input) {
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
export const updateMaintenance = /* GraphQL */ `
  mutation UpdateMaintenance($input: UpdateMaintenanceInput!) {
    updateMaintenance(input: $input) {
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
export const deleteMaintenance = /* GraphQL */ `
  mutation DeleteMaintenance($input: DeleteMaintenanceInput!) {
    deleteMaintenance(input: $input) {
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
