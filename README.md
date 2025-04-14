# 🧠 React Performance Challenge

Build a small performant React app using the given dummy API.  
This challenge evaluates your knowledge of:

- Controlled inputs & debouncing
- API fetching and error handling
- Performance (caching, memoization)
- State management (local state is enough)
- Closures & React.memo
- Clean code and UI behavior

---

## 🚀 Task Overview

Build a simple user search app with the following behavior:

### 1. Search Input
- Implement a text input.
- Debounce user input (300–500ms).
- Call the API using this helper:

```
getUsers(query?: string): Promise<UserItem[]>
```

- Handle:
    - loading
    - error
    - empty state
    - data list

> 💡 You can extend the `UserItem` type if needed.

---

### 2. User Component
- File: `components/User.tsx`
- Implement it to show all user fields with simple styling.
- Use `generateColorByAge(age)` from `lib/helpers` to get a color.
- Use that color for a part of the UI (e.g., background, badge, etc.).

---

### 3. Selectable Users
- Clicking a user toggles their selection.
- Selected items should be visually different.
- Show selected users’ names or last names above the list.
- Clear selected users when new data is fetched.

---

### 4. Performance Requirements
- Ensure the app behaves well during fast input changes.
- Prevent UI from updating more than needed.
- Think about reusing values for performance-heavy operations.
- Use efficient data structures for checking selections.

> ⭐ Extra point if you improve the performance of `generateColorByAge`.

---

## ✅ Rules

- You can install any packages.
- Do not remove or change hardcoded logic (e.g., delay or heavy task).
- You can extend code, types, and components.

---

## 🧪 Expectations

No tests are required, but we will review for:

- Smooth and responsive UI
- No unnecessary API calls
- Proper caching and memo usage
- Clean code and understandable logic

---

Good luck and have fun building!
