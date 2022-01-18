class AcGameMenu {
	constructor(root) {
		this.root = root;
		this.$menu = $(`
<div class= "ac-game-menu">
	<div class="ac-game-menu-field">
		<div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
			å•äººæ¨¡å¼
		</div>
		<br>
		<div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
			å¤šäººæ¨¡å¼
		</div>
		<br>
		<div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
			è®¾ç½®
		</div>
	</div>
</div>

`);      //htmå¯¹è±¡åŠ Â¥æ™®é€šå¯¹è±¡ä¸åŠ 
		this.root.$ac_game.append(this.$menu);	
		this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-modeâ');
		this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
		this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
	
		this.start();
	}
		start() {
			this.add_listening_events();
		}
		add_listening_events() {
			let outer = this;
			this.$single_mode.click(function() {
				outer.hide();
				outer.root.playground.show();
			});
			this.$multi_mode.click(function(){
				console.log("click multi mode");
			});
			this.$settings.click(function(){
				console.log("click settings");
			});
	}
		show() { //æ˜¾ç¤ºmenuç•Œé¢
			this.$menu.show();
		}
		hide() { //å…³é—­menuç•Œé¢
			this.$menu.hide();
		}


}
class AcGamePlayground {
	constructor(root) {
		this.root = root;
		this.$playground = $(<div>æ¸¸æˆç•Œé¢</div>);
		
		this.hide();
		this.root.$ac_game.append(this.$playground);

		this.start();
	}

	start() {
	}

	show() { //æ‰“å¼€playgroundç•Œé¢
		this.$playground.show();
	}
	hide() { //å…³é—­playgroundç•Œé¢
		this.$playground.hide();
	}
}
class AcGame {
	constructor(id) {
		this.id = id;
		this.$ac_game = $('#' + id);
		this.menu = new AcGameMenu(this);
		this.playground = new AcGamePlayground(this);
		
		this.start();
	}

	start() {
	}
}
