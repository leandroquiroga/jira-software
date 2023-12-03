import { Entry } from "@/interfaces"


export type UIActionType =
  | { type: "[UI] - Open Sidebar" }
  | { type: "[UI] - Close Sidebar" }
  | { type: "[UI] - Open Modal" }
  | { type: "[UI] - Close Modal" }
  | { type: "[UI] - Start Dragging" }
  | { type: "[UI] - End Dragging" };


export type EntriesActionType =
  | { type: "[Entry] Add-Entry"; payload: Entry }
  | { type: "[Entry] Updated-Entry"; payload: Entry }
  | { type: "[Entry] Initial-Load"; payload: Entry[] };