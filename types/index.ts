import { Entry } from "@/interfaces"


export type UIActionType = 
  | {type: 'UI - Open Sidebar'}
  | {type: 'UI - Close Sidebar'}


export type EntriesActionType = 
  | {type: '[Entry] Add-Entry', payload: Entry}