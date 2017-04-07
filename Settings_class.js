function Settings_random_walk_coloring() {
	this.max_jump = 1 + 5;
	this.max_col = 5000;
	this.Pixel_colors = [];
	this.deaths = 0;
	this.max_drawn = 0;
	this.control_val = false;
	this.save_only_bigger_colors = false; //one makes the other impossible!
	this.save_only_smallr_colors = false;
	this.dont_leave_the_canvas = true;
	this.keep_the_canvas_without_background = false;
	this.decrease_in_color = true;
	this.keep_position = false;
	this.random_start_position = true;
	this.save_frames = false;
	this.save_frames_location = 'SAVE/';
	this.zero_to_max_coloring = false;
	this.bg_color = [0, 0, 0];
	this.draw_ellipses = false;
	this.point_size = 1;
}
