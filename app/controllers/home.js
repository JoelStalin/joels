module.exports = function(page,data){
	var controller = {};

    controller.index = function(req, res){
        res.render(page,data);
    };

    return controller;
}