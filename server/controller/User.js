const UserController = {
  index(req, res) {
    res.status(200).json({ nome: "vinicius", idade: 29, peso: 78.5 });
  },
  create(req, res) {
    users.push(req.body);
    res.send(users);
  },
};

export default UserController;
