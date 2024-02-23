module.exports = filter = (req, res, next) => {

    if (!req.query.age) {
        res.send("please  age")
    }
    else if (req.query.age < 18) {
        res.send("invalid age")
    }
    else {
        next()

    }
}