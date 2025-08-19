import { create } from "zustand";

export const useUserStore = create((set) => ({
  count: 0,
  incrementCount: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  users: [],
  usersLoading: false,
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();

      set({ users: users, loading: false });
    } catch (e) {
      console.log(e);
      set({ loading: false });
    }
  },
}));
