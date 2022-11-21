const mongoose = require('mongoose')
const Emp = require('../models/emp')

function create(req, res, next) {
    let empName = req.body.empName;
    let empEmail = req.body.empEmail;
    let empMobile = req.body.empMobile;
    let emp = new Emp({
        empName,
        empEmail,
        empMobile
    })
    emp.save().then((data) => {
        res.send(data)
    })
}

const addUser = (req, res, next) => {
    let empName = req.body.empName;
    let empEmail = req.body.empEmail;
    let empMobile = req.body.empMobile;
    let emp = new Emp({
        empName,
        empEmail,
        empMobile
    })
    emp.save().then((data) => {
        res.send("Sucessfully save data!")
    })
}

function view(req, res, next) {
    Emp.find({}).then((data) => {
        res.send(data)
    })
}

function update(req, res, next) {
    Emp.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Updating the   Employee recored " })
        };
        res.send({ success: "Updation successfull" });
    })
}

const remove = (req, res, next) => {
    Emp.findByIdAndDelete(req.body.id, (err, emp) => {
        if (err) {
            return res.status(500).send({
                error: "Problem with Deleting the Employee recored "
            })
        }
        res.send({ success: 'Employee deleted successfully' })
    })
}

module.exports = {
    create,
    view,
    update,
    addUser,
    remove,
}