import Users from '../controllers/user';
import Books from '../controllers/book';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the BookStore API!',
    }));

    app.get('/api/users/:id', Users.GetOne);
    app.get('/api/users', Users.Get);
    app.post('/api/users', Users.SignUp);
    app.put('/api/users/:id', Users.EditUser);
    app.delete('/api/users/:id', Users.DeleteUser);

    app.post('/api/users/:userId/books', Books.addBook);
}