const notFound = (req, res, next) => res.status(404).json({ success: true, msg: "route does not exist" });


module.exports = notFound