# **Project Name**

## **Overview**

This project is built with the following technologies:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Capacitor](https://capacitorjs.com/)
- [Mantine](https://mantine.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## **Getting Started**

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### **Building the Project**

To create a production build:

```bash
npm run build
```

### **Running the Application**

To preview the production build:

```bash
npm run preview
```

---

## **Project Structure**

### **Top-Level Overview**

The project is organized as follows:

```
src/
├── assets/
├── components/
├── modules/
├── pages/
├── hooks/
├── services/
├── stores/
├── styles/
├── utils/
├── main.tsx
└── App.tsx
```

---

### **Folder Details**

#### **1. `assets/`**

Stores static assets such as images, icons, and fonts.

- **images/**: Image files used in the application.
- **icons/**: Icon assets.
- **illustrations/**: SVG or other graphic illustrations.

#### **2. `components/`**

Houses reusable UI components that are shared across the application. Each component is in its own directory, containing the component file and its styles.

Example:

```
components/
├── Button/
│   ├── Button.tsx
│   └── Button.module.scss
└── Layout/
    ├── Header/
    ├── Footer/
```

#### **3. `modules/`**

Feature-specific folders that encapsulate all logic, components, and assets for a feature.

Example structure for the `auth` module:

```
modules/
└── auth/
    ├── api/            # API calls for authentication
    ├── assets/         # Feature-specific images/icons
    ├── components/     # UI components for the feature
    ├── hooks/          # Feature-specific custom hooks
    ├── services/       # Business logic for the feature
    ├── stores/         # State management for the feature
    ├── utils/          # Utility functions for the feature
```

#### **4. `pages/`**

Contains route-specific components. Each file corresponds to a specific page in the application.

#### **5. `hooks/`**

Reusable custom hooks that are shared across the application.

#### **6. `services/`**

Centralized logic for interacting with external APIs or performing business logic.

#### **7. `stores/`**

Global state management for the application using MobX. Shared stores reside here.

#### **8. `styles/`**

Contains global styles and theme configurations.

- **globals.css**: Global CSS definitions.
- **variables.css**: CSS variables.
- **mixins.css**: CSS mixins.

#### **9. `utils/`**

Utility functions and constants that can be used throughout the application.

---

## **How to Add a New Feature**

1. Create a folder inside `modules/` with the name of your feature (e.g., `products`).
2. Add subfolders such as `components/`, `hooks/`, `services/`, and `utils/` as needed.
3. Implement the required logic, UI, and assets within the feature folder.
4. If state management is needed, add a new store in the `stores/` subfolder.
5. Add routing in the `pages/` folder if your feature requires a new route.

---

## **Scripts**

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request.

---

## **License**

This project is licensed under the [MIT License](./LICENSE).
