import { rateLimit } from "express-rate-limit";
import { tooManyRequests } from "../utils/api-error.js";

const limiter = rateLimit({
    windowMs: 30 * 1000, // 15 minutes
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
    ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    handler: (_req, _res) => {
        throw tooManyRequests("Please try again later");
    },
});

export default limiter;
