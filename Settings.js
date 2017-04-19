function Settings(x_center, y_center) {
  this.center = createVector(x_center, y_center);
  this.amount = amount;
  this.max_jump = max_jump;
  this.sidelength = sidelength;
  this.point_height;
  this.point_width;
  this.max_col = max_col;
  this.use_Pixel_colors = Pixel_colors;
  this.Pixel_colors = [];
  this.deaths = 0;
  this.running = running;
  this.h = h;
  this.w = w;
  this.max_drawn = 0;
  this.control_val = control_val;
  this.save_only_bigger_colors = save_only_bigger_colors; //one makes the other impossible!
  this.save_only_smallr_colors = save_only_smallr_colors;
  this.dont_leave_the_canvas = dont_leave_the_canvas;
  this.keep_the_canvas_without_background = keep_the_canvas_without_background;
  this.decrease_in_color = decrease_in_color;
  this.keep_position = keep_position;
  this.random_start_position = random_start_position;
  this.save_frames = save_frames;
  this.save_frames_location = save_frames_location;
  this.zero_to_max_coloring = zero_to_max_coloring;
  this.bg_color = bg_color;
  this.draw_ellipses = draw_ellipses;
  this.point_size = point_size;
  this.sync_after_deaths = sync_after_deaths;
  this.reproduce = reproduce;
  this.reproduction_adds = reproduction_adds; //cool: use likeliness of about 0.1 or so for slower, but still exponential growth
}
