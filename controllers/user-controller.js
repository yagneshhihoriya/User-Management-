const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');
const errorHandler = require('../error-handler');

exports.getUsers = async (req, res) => {
    try {
        let { name, order, page, size } = req.body
        let filter = {}
        if (name) {
            filter = { name: { $regex: `.*${name}.*`, $options: 'i' } }
        }
        page = page || 1
        size = size && size <= 10 ? size : 10
        let validSortOrders = ['asc', 'desc']
        order = order && validSortOrders.includes(order.toLowerCase()) ? order : 'asc'
        let [users, count] = await Promise.all([
            User.find(filter).sort({ age: order }).limit(size || 10).skip((page - 1) * size),
            User.count(filter)
        ])
        users = users.map(ele => ({ id: ele._id, name: ele.name, age: ele.age }))
        return res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            data: { totalUsers: count, users }
        })
    } catch (error) {
        return errorHandler.handleError(req, res, error)
    }
}