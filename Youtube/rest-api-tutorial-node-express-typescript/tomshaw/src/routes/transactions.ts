import { Router } from "express";
import { PostTransactionAndUpdateUserBalance } from "../controllers/TransactionController";
import { AddUser } from "../controllers/UserController";

const router = Router();

// /transactions/
router.post("/", PostTransactionAndUpdateUserBalance);
// /transactions/users
router.post("/users", AddUser);

export default router;

/**
 * endpoint to add the user http://localhost:5000/transactions/users
 * {
    "name": "Manu Mathew",
    "email": "test@gmail.com",
    "balance": 100,
    "imageUrl": "test",
    "color": "red",
    "password": "testtest"
}
 * 
 * endpoint to add trasaction http://localhost:5000/transactions/
 * {
    "user":"678d904f2dc04f92e933f367",
    "total":173,
    "business":"test test",
    
    "items": [
        {
            "title":"test",
            "quantity":"1",
            "price":130
        }
    ],
    "date":"2025-01-19"
}
 * 
 */
