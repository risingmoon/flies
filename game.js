var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create:create, update: update, render:render });

var bmd;
var flies;
var fly

function preload() {
	game.load.spritesheet('fly', 'fly.png', 32, 32, 6);
}

function create() {
	flies = game.add.group();
	flies.setAll('anchor.x', 0.5);
	flies.setAll('anchor.y', 0.5);

	for(var i=0; i<3; i++){
		//flies.create(game.input.x, game.input.y, 'fly');
		flies.create(game.world.randomX, game.world.randomY, 'fly');
	}
	game.input.onTap.add(function(){
		//fly.animations.add('flying');
		//fly.animations.play('flying',15,true);
	},this);

}

function update() {
}

function render() {
	game.debug.pointer( game.input.activePointer );
}
