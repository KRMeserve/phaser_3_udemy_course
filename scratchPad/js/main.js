var game;
window.onload = () => {
    const config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain]
    };

    game = new Phaser.Game(config);
}