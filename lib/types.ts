// Schema Builder Types
export interface Attribute {
  id: number
  name: string
  type: string
  required: boolean
  description: string
}

export interface Template {
  id: number
  name: string
  description: string
  attributes: Attribute[]
}

export interface Schema {
  id: string
  name: string
  description: string
  attributes: Attribute[]
}

// Use Case Types
export interface UseCase {
  id: number
  name: string
  description: string
  attributes: number[] // IDs of attributes used
  accessPatterns: string[]
  frequency: "Low" | "Medium" | "High" | "Very High"
}

// Database Schema Types
export interface Column {
  name: string
  type: string
  constraints: string[]
  description: string
}

export interface Table {
  name: string
  isPrimary: boolean
  columns: Column[]
  indexes?: Index[]
}

export interface Index {
  name: string
  columns: string[]
  unique: boolean
}

export interface DatabaseSchema {
  tables: Table[]
}
