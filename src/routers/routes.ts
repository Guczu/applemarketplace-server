import { tokenRouter } from "./token.router";
import { usersRouter } from "./users.router";
import { Express } from "express";

const routes = (router: Express) => {
    usersRouter(router);
    tokenRouter(router);
}

export default routes;