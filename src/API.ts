/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMaintenanceInput = {
  id?: string | null,
  title: string,
  contents: string,
  ata: string,
  maintenanceMessage: string,
  priority: string,
  completed: boolean,
  shipId: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMaintenanceConditionInput = {
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  ata?: ModelStringInput | null,
  maintenanceMessage?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  shipId?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaintenanceConditionInput | null > | null,
  or?: Array< ModelMaintenanceConditionInput | null > | null,
  not?: ModelMaintenanceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Maintenance = {
  __typename: "Maintenance",
  id: string,
  title: string,
  contents: string,
  ata: string,
  maintenanceMessage: string,
  priority: string,
  completed: boolean,
  shipId: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMaintenanceInput = {
  id: string,
  title?: string | null,
  contents?: string | null,
  ata?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
  completed?: boolean | null,
  shipId?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMaintenanceInput = {
  id: string,
};

export type ModelMaintenanceFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  ata?: ModelStringInput | null,
  maintenanceMessage?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  shipId?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaintenanceFilterInput | null > | null,
  or?: Array< ModelMaintenanceFilterInput | null > | null,
  not?: ModelMaintenanceFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMaintenanceConnection = {
  __typename: "ModelMaintenanceConnection",
  items:  Array<Maintenance | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateMaintenanceMutationVariables = {
  input: CreateMaintenanceInput,
  condition?: ModelMaintenanceConditionInput | null,
};

export type CreateMaintenanceMutation = {
  createMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMaintenanceMutationVariables = {
  input: UpdateMaintenanceInput,
  condition?: ModelMaintenanceConditionInput | null,
};

export type UpdateMaintenanceMutation = {
  updateMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMaintenanceMutationVariables = {
  input: DeleteMaintenanceInput,
  condition?: ModelMaintenanceConditionInput | null,
};

export type DeleteMaintenanceMutation = {
  deleteMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMaintenanceQueryVariables = {
  id: string,
};

export type GetMaintenanceQuery = {
  getMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMaintenancesQueryVariables = {
  filter?: ModelMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaintenancesQuery = {
  listMaintenances?:  {
    __typename: "ModelMaintenanceConnection",
    items:  Array< {
      __typename: "Maintenance",
      id: string,
      title: string,
      contents: string,
      ata: string,
      maintenanceMessage: string,
      priority: string,
      completed: boolean,
      shipId: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MaintenanceByShipIdQueryVariables = {
  shipId: number,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MaintenanceByShipIdQuery = {
  maintenanceByShipId?:  {
    __typename: "ModelMaintenanceConnection",
    items:  Array< {
      __typename: "Maintenance",
      id: string,
      title: string,
      contents: string,
      ata: string,
      maintenanceMessage: string,
      priority: string,
      completed: boolean,
      shipId: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMaintenanceSubscription = {
  onCreateMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMaintenanceSubscription = {
  onUpdateMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMaintenanceSubscription = {
  onDeleteMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title: string,
    contents: string,
    ata: string,
    maintenanceMessage: string,
    priority: string,
    completed: boolean,
    shipId: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
