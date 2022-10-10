export type MaintenanceData = {
  id: number
  title: string
  ata: string
  maintenanceMessage: string
  completed: boolean
  priority: string
  contents: string
  shipId: number
}


export type InputMaintenance = {
  title: string
  ata: string
  maintenanceMessage: string
  completed: boolean
  priority: string
  contents: string
  shipId: number
}