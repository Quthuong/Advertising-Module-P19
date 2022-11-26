import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    // router.post('/api/login', userController.handleLogin);
    // router.get('/api/get-all-users', userController.handleGetAllUsers);
    // router.post('/api/create-new-user', userController.handleCreateNewUser);
    // router.put('/api/edit-user', userController.handleEditUser);
    // router.delete('/api/delete-user', userController.handleDeleteUser);

    return app.use("/", router);
}

module.exports = initWebRoutes;