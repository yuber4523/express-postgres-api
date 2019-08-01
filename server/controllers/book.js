import models from '../models';

export default class Books {

    static addBook(req, res) {
        const {
            strTitle,
            strAuthor,
            strDescription,
            intQuantity,
            intUserId
        } = req.body;

        return Book.create({
            strTitle,
            strAuthor,
            strDescription,
            intQuantity,
            intUserId
        })
        .then(query => res.status(201).send({
            success: true,
            message: 'Book created successfully',
            data: query
        }))
    }
}