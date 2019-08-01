import models from '../models'
import Books from './book';
import {
    RSA_NO_PADDING
} from 'constants';

const {
    User
} = models;

export default class Users {

    //Get All
    static Get(req, res) {
        User.findAll().then(query => res.status(200).send({
            success: true,
            data: query
        })).catch(error => res.status(400).send(error));;
    }

    //Get One
    static GetOne(req, res) {
        return User.findByPk(req.params.id)
            .then(query => {
                if(!query){
                    res.status(400).send({
                        success: false,
                        message: 'User not found!'
                    })
                }
                res.status(200).send({
                    success: true,
                    data: query
                })
            }).catch(error => res.status(400).send(error));
    }

    //Add User
    static SignUp(req, res) {
        const {
            strName,
            strUsername,
            strEmail,
            strPassword
        } = req.body;

        return User.create({
                strName,
                strUsername,
                strEmail,
                strPassword
            })
            .then(query => res.status(201).send({
                success: true,
                message: 'User created successfully',
                data: query
            }))
            .catch(error => res.status(400).send(error));;
    }

    //Edit User
    static EditUser(req, res) {
        debugger;
        const {
            strName,
            strUsername,
            strEmail,
            strPassword
        } = req.body;

        return User.findByPk(req.params.id)
            .then(data => {
                data.update({
                    strName: strName,
                    strUsername: strUsername,
                    strEmail: strEmail,
                    strPassword: strPassword
                }).then(updatedData => {
                    res.status(200).send({
                        message: 'User updated successfully',
                        data: {
                            id: req.params.id,
                            strName: updatedData.strName,
                            strUsername: updatedData.strUsername,
                            strEmail: updatedData.strEmail,
                            strPassword: updatedData.strPassword
                        }
                    }).catch(error => res.status(400).send(error));
                })
            })
            .catch(error => res.status(400).send(error));;
    }

    //Delete user
    static DeleteUser(req, res) {
        return User.findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(400).send({
                        success: false,
                        message: 'User not found!'
                    })
                }
                return data.destroy()
                    .then(() => res.status(200).send({
                        message: 'User was successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}