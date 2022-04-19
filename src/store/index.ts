import { User } from "@/types";
import { reactive, readonly } from "vue";

export type StoreState = {
  currentUser: User | null;
}

const initialState: StoreState = {
  currentUser: null
}

const state = reactive<StoreState>({...initialState})

export function setCurrentUser(user: User): void {
  state.currentUser = user
}

export function clearCurrentUser(): void {
  state.currentUser = null
}

export function resetStore(): void {
  clearCurrentUser()
}

export default readonly(state)