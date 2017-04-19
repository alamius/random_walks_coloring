function Points_Center(x_center, y_center) {
  this.P = [];
  this.sett = new Settings(x_center, y_center);

  this.setup = function() {
    // createCanvas(w * 2, h * 2);
    // stroke(255);
    // noStroke();
    // background(bg_color[0], bg_color[1], bg_color[2]);
    this.sett.point_height = this.sett.h / this.sett.sidelength;
    this.sett.point_width = this.sett.w / this.sett.sidelength;
    for (i = 0; i < this.sett.amount; i += 1) {
      this.P.push(new Point(this.sett));
      if (this.sett.random_start_position) {
        this.P[i].make_random_start_pos(this.sett);
      }
    }
    // if (this.sett.use_Pixel_colors) {
    //   for (x = -this.sett.sidelength; x < this.sett.sidelength; x += 1) {
    //     Pixel_colors.push([]);
    //     for (y = -this.sett.sidelength; y < this.sett.sidelength; y += 1) {
    //       Pixel_colors[x + this.sett.sidelength].push(0);
    //     }
    //   }
    // }
  }

  this.draw = function() {
    if (this.sett.keep_the_canvas_without_background){
      // background(this.sett.bg_color[0], this.sett.bg_color[1], this.sett.bg_color[2]);
    }
    this.draw1();
    if (this.sett.save_frames) {
      saveFrames(this.sett.save_frames_location + "image-", "png", 1, 10);
    }
  }

  this.draw1 = function() {
    for (i = 0; i < this.P.length; i += 1) {
      // P[i].show();
      // P[i].upd();
      this.P[i].show_upd(this.sett);
      if (this.P[i].delete) {
        if (this.sett.keep_position) {
          pos = P[i].pos;
        }
        this.P[i] = new Point(this.sett);
        if (this.sett.keep_position) {
          this.P[i].pos = pos;
        }
        if (this.sett.reproduce) {
          this.reproduction();
        }
        if (this.sett.sync_after_deaths) {
          this.P[i].running = false;
          this.reset_if_all_are_not_running();
        }
        this.sett.deaths += 1;
        // console_log(ceil(deaths / amount));
      }
    }
  }

  this.make_random_start_pos = function() {
    for (i = 0; i < this.sett.amount; i += 1) {
      this.P[i].make_random_start_pos(this.sett);
    }
  }

  this.reset_if_all_are_not_running = function() {
    // TODO:
  }
  this.reproduction = function() {
    // TODO: dont use global reproduction function
  }
}
