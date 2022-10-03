/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMaintenanceInput = {
  title?: string | null,
  contents?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
  completed?: boolean | null,
  shipId?: number | null,
};

export type Maintenance = {
  __typename: "Maintenance",
  id: string,
  title?: string | null,
  contents?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
  completed?: boolean | null,
  shipId?: number | null,
};

export type UpdateMaintenanceInput = {
  id: string,
  title?: string | null,
  contents?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
  completed?: boolean | null,
  shipId?: number | null,
};

export type DeleteMaintenanceInput = {
  id: string,
};

export type TableMaintenanceFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  contents?: TableStringFilterInput | null,
  maintenanceMessage?: TableStringFilterInput | null,
  priority?: TableStringFilterInput | null,
  completed?: TableBooleanFilterInput | null,
  shipId?: TableIntFilterInput | null,
};

export type TableIDFilterInput = {
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
};

export type TableStringFilterInput = {
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
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type MaintenanceConnection = {
  __typename: "MaintenanceConnection",
  items?:  Array<Maintenance | null > | null,
  nextToken?: string | null,
};

export type CreateMaintenanceMutationVariables = {
  input: CreateMaintenanceInput,
};

export type CreateMaintenanceMutation = {
  createMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};

export type UpdateMaintenanceMutationVariables = {
  input: UpdateMaintenanceInput,
};

export type UpdateMaintenanceMutation = {
  updateMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};

export type DeleteMaintenanceMutationVariables = {
  input: DeleteMaintenanceInput,
};

export type DeleteMaintenanceMutation = {
  deleteMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};

export type GetMaintenanceQueryVariables = {
  id: string,
};

export type GetMaintenanceQuery = {
  getMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};

export type ListMaintenancesQueryVariables = {
  filter?: TableMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaintenancesQuery = {
  listMaintenances?:  {
    __typename: "MaintenanceConnection",
    items?:  Array< {
      __typename: "Maintenance",
      id: string,
      title?: string | null,
      contents?: string | null,
      maintenanceMessage?: string | null,
      priority?: string | null,
      completed?: boolean | null,
      shipId?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMaintenanceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  contents?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
};

export type OnCreateMaintenanceSubscription = {
  onCreateMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};

export type OnUpdateMaintenanceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  contents?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
};

export type OnUpdateMaintenanceSubscription = {
  onUpdateMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};

export type OnDeleteMaintenanceSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  contents?: string | null,
  maintenanceMessage?: string | null,
  priority?: string | null,
};

export type OnDeleteMaintenanceSubscription = {
  onDeleteMaintenance?:  {
    __typename: "Maintenance",
    id: string,
    title?: string | null,
    contents?: string | null,
    maintenanceMessage?: string | null,
    priority?: string | null,
    completed?: boolean | null,
    shipId?: number | null,
  } | null,
};
