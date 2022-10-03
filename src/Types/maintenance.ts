export type InputMaintenance = {
  title: string
  ata: string
  maintenanceMessage: string
  completed: boolean
  priority: string
  description: string
  shipId: number
  userId: string | undefined
}