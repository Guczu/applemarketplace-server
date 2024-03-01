import { usersRouter } from "./users.router";
import { Express } from "express";

const routes = (router: Express) => {
    usersRouter(router);
}

export default routes;