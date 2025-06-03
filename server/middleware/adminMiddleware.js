
const jwt = require('jsonwebtoken');
exports.adminMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token){
        return res.status(401).json({
            message:'Unauthorized'
        });
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if (err){
                return res.status(401).json({
                    message:"Unauthorized"
                })
            }
            req.user = decoded.id;
            req.role = decoded.role;
            console.log(req.user);
            if (req.role !== "admin"){
                return res.status(403).json({
                    message: "Forbidden: You do not have permission to access this resource."
                });
            }
            next();
        })
}