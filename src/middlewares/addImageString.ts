import { Request, Response, NextFunction } from "express";

export const addImageString = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    if (req.file) {
        req.body.image = req.file.location;
    }
    next();
};
