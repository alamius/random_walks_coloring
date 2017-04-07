function Points_center() {
	this.P = [];
	this.Pixel_colors = []
	this.amount = amount;
	this.sett = new Settings_random_walk_coloring();
	
	this.setup = function() {
		for (i = 0; i < amount; i += 1) {
			this.P.push(new Point());
			if (random_start_position) {
				this.P[i].make_random_start_pos();
			}
		}
		for (x = -sidelength; x < sidelength; x += 1) {
			this.Pixel_colors.push([]);
			for (y = -sidelength; y < sidelength; y += 1) {
				this.Pixel_colors[x + sidelength].push(0);
			}
		}
	}
	
	this.draw = function() {
		
	}
	
	this.all_P_make_random_start_pos = function() {
		for (i=0; i<P.length; i+=1) {
			this.P[i].make_random_start_pos();
		}
	}
}
