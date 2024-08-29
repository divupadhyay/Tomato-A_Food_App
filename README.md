# Tomato: A MERN Stack Food Delivery App

Welcome to **Tomato**, a modern food delivery application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Whether you're craving your favorite pizza or exploring new culinary delights, Tomato connects you with local restaurants and ensures your meals are delivered right to your doorstep with ease and efficiency.

## Features

- **User Authentication:** Secure login and registration with JWT and password hashing.
- **Restaurant Listings:** Browse through a wide variety of local restaurants and their menus.
- **Order Management:** Place and track your orders with real-time updates.
- **Payment Integration:** Secure and seamless payment process using popular payment gateways.
- **User Profiles:** Manage your personal details, order history, and saved addresses.
- **Admin Dashboard:** Restaurant owners can manage their menu, view orders, and update their business information.

## Tech Stack

- **Frontend:** React.js with Redux for state management, styled-components for styling, and Axios for API requests.
- **Backend:** Node.js and Express.js to handle server-side logic and API endpoints.
- **Database:** MongoDB for storing user data, restaurant information, and order details.
- **Authentication:** JSON Web Tokens (JWT) for secure user authentication.
- **Payment Gateway:** Integration with popular payment services (e.g., Stripe, PayPal).

## Getting Started

To get a local copy up and running follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/divupadhyay/Tomato-A_Food_App.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Food-del
   ```
3. **Install dependencies:**
   - For the backend:
     ```bash
     cd backend
     npm install
     
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

4. **Set up environment variables:**
   - Create a `.env` file in the `server` directory and add your environment-specific variables (e.g., database connection string, JWT secret).

5. **Start the application:**
   - Start the backend server:
     ```bash
     cd backend
     npm run server
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm run dev
     ```

6. **Visit `http://localhost:3000` in your browser to view the app.**

## Contributing

We welcome contributions to Tomato! Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy your delicious journey with Tomato! 🍅🚀
