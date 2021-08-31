function Cat() {
    this.stomach = [];
};
Cat.prototype.eat = function(mouse) { //    --> eat(mouse) = function(mouse)
    this.stomach.push(mouse);
    mouse.die();
};

module.exports = Cat;