let controller = {};

module.exports = controller;


controller.home = (req, res) => res.send('home');

controller.get = (req, res) => {
    res.send('get all users');
};

controller.create = (req, res) => {
    res.send('create user');
}

controller.update = (req, res) => {
    res.send('update user');
}

controller.delete = (req, res) => {
    res.send('delete user');
}