// generateToken.js
import jwt from 'jsonwebtoken';

const secret = 'a282d8df56c631e093f7923732ca392d77934058576455d427ca2bb8ffae8f6bc69542a56c49b2c9dacabdad991cb3ccfec5a4396653af3fddd97ddb1958d397';
const token = jwt.sign({ userId: 1 }, secret);
console.log(token);
