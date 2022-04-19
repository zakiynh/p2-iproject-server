const errHandler = (err, req, res, next) => {
    console.log(err);
    switch (err.name) {
        case 'SequelizeValidationError':
            res.status(400).json({ 
                statusCode: 400,
                message: err.errors.map(el => el.message),
            });
            break;
        case 'SequelizeUniqueConstraintError':
            res.status(400).json({
                statusCode: 400,
                message: err.errors.map(el => el.message),
            });
            break;
        case 'Email not found':
            res.status(401).json({
                statusCode: 401,
                message: 'Invalid email/password', 
            });
            break;
        case 'Wrong Password':
            res.status(401).json({
                statusCode: 401,
                message: 'Invalid email/password',
            });
            break;
        case 'Not Found':
            res.status(404).json({
                statusCode: 404,
                message: 'Not Found',
            });
            break;
        case 'Forbidden':
            res.status(403).json({
                statusCode: 403,
                message: 'You do not have access to delete or update this resource',
            });
            break;
        case 'JsonWebTokenError':
            res.status(401).json({
                statusCode: 401,
                message: 'Need to Login first',
            });
            break;
        default:
            res.status(500).json({
                statusCode: 500,
                message: 'Internal Server Error',
            });
        }
}

module.exports = errHandler;