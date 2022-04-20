const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
let baseUrl = "https://kitsu.io/api/edge/manga";

class Controller {
    static async fetchManga(req, res, next) {
        let { page, filter } = req.query;
        try {
            const limit = 18;
            let offset = 0;
            if (!page) {
                baseUrl += `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}/episode`;
            } else {
                offset = 18 * page;
				baseUrl += `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}/episode`;
            }
            const response = await axios({
                method: "get",
                url: baseUrl,
                headers: {
                    Content_Type: "application/json",
                },
            })
            res.status(200).json(response.data.data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller