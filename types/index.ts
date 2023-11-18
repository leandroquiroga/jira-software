import { Entry } from "@/interfaces"


export type UIActionType = 
  | { type: '[UI] - Open Sidebar' }
  | { type: '[UI] - Close Sidebar' }
  | { type: '[UI] - Open Modal' }
  | { type: '[UI] - Close Modal' }


export type EntriesActionType = 
  | {type: '[Entry] Add-Entry', payload: Entry}