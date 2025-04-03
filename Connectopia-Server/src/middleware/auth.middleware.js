// import jwt from "jsonwebtoken"
// import User from "../models/user.model.js"

// const protectRoute = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt
//         if (!token) {
//             return res.status(401).json({ message: "UnAuthorized - No token provided" })
//         }
//         const decode = jwt.verify(token, process.env.JWT_SECRET)
//         if (!decode) {
//             return res.status(401).json({ message: "UnAuthorized - Invalid token " })
//         }
//         const user = await User.findById(decode.userId).select("-password")
//         if (!user) {
//             return res.status(404).json({ message: "User not found" })
//         }
//         req.user = user
//         next()
//     }
//     catch (error) {
//         console.log("Error in protected middleware", error.message)
//         return res.status(500).json({ message: "Internal server error" })
//     }
// }
// export default protectRoute
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        // ✅ Extract token from cookies
        const token = req.cookies?.jwt;  
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // ✅ Verify token using correct env variable
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }

        // ✅ Ensure we are fetching the user with the correct property
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // ✅ Attach user to request and proceed
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protected middleware:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default protectRoute;
