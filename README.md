# Expense Tracker App (FSD Architecture)

This project is an expense tracking application built using React and the Featured Sliced Design (FSD) architecture.

## Technologies

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **TypeScript:** A strongly typed programming language that builds on JavaScript.
- **Mantine:** A React components library with a focus on usability and accessibility.
- **Capacitor:** A cross-platform runtime for building web apps that run natively on iOS, Android, and the web.

---

## Project Structure (FSD)

- **`app/`:** Contains core application logic, routing, and providers.
- **`pages/`:** Represents top-level pages like the Home, Add Expense, and Reports pages.
- **`widgets/`:** Independent, reusable UI components like ExpenseList, ExpenseForm, and Summary.
- **`features/`:** Encapsulates business logic related to specific expense tracking features.
- **`entities/`:** Represents data entities like Expense and Category.
- **`shared/`:** Contains reusable UI components, utility functions, and shared types.
- **`styles/`:** Holds global styles and Mantine theme configuration.

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

---

### **Building the Project**

To create a production build:

```bash
npm run build
```

---

### **Running the Application**

To preview the production build:

```bash
npm run preview
```

---

## **Scripts**

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.
- `npm run build:android`: Build the android application.

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
