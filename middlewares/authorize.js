async function authorize(req, res, next) {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id,
                userId
            }
        })
        if (!user) throw {
                name: "Forbidden",
                message: "You don't have permission to access this resource"
            }
        next();
    } catch (err) {
        next(err);
    }
}