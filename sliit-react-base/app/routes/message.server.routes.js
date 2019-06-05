const express = require('express');
let Course = require('../../course.model');
const Router = express.Router();

Router.get('/', function (req, res) {
    res.json({message: 'Welcome to the react + express + mongoDB'});
});

Router.route('/courses/add').post(function (req, res) {
    console.log(req.body);
    let course = new Course(req.body);
    course.save()
        .then(course => {

            res.status(200).json({'course': 'Addded successfully'});

        })
        .catch(err => {

            res.status(400).send('Adding new course failed');

        });

});

Router.route('/courses/').get(function (req, res) {


    Course.find(function (err, course) {

        if (err) {

            console.log(err);

        } else {
            console.log(course);
            res.json(course);

        }

    });

});

Router.route('/courses/:id').get(function (req, res) {


    let id = req.params.id;
    Course.findById(id, function (err, subject) {

        res.json(subject);

    });

});
module.exports = Router;
