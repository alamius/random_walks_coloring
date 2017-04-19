function Point(Poi_sett) {
  this.pos = createVector(0 + Poi_sett.center.x, 0 + Poi_sett.center.y);
  this.col = max_col;
  this.delete = false;
  this.running = true;
  this.last_pos = createVector(0, 0);

  this.upd = function() {
    if (!this.running) {
      return 0;
    }
    if (this.col <= 0) {
      this.delete = true;
    }
    dir = floor(random(4));
    len = floor(random(max_jump));
    if (dir < 2) {
      if (dir < 1) {               // case 0:
        x = len;        y = 0;
      } else {                     // case 1:
        x = 0;          y = len;
      }
    } else {
      if (dir < 3) {               // case 2:
        x = -len;       y = 0;
      } else {                     // case 3:
        x = 0;          y = -len;
      }
    }
    if (decrease_in_color){
      this.col -= len;
    }
    this.pos.x += x;
    this.pos.y += y;
    if (dont_leave_the_canvas) {
      this.pos = set_pos_back(createVector(this.pos.x, this.pos.y));
    } else {
      this.pos = createVector(this.pos.x, this.pos.y);
    }
    return 0;
  }

  // this.show = function() {
  //   if (!this.running) {
  //     return 0;
  //   }
  //   if (!zero_to_max_coloring) {
  //     col = this.col * 255 / max_col;
  //   } else {
  //     col = 255 - this.col * 255 / max_col;
  //   }
  //   fill(col, col, col);
  //
  //   x0 = (this.pos.x + sidelength) * point_width;
  //   y0 = (this.pos.y + sidelength) * point_height;
  //   rect(x0, y0, point_width, point_height);
  //   // console_log('pos: ' + str(x0) + ' ' + str(y0));
  //   // console_log('dist: ' + str(point_width) + ' ' + str(point_height));
  //   return 0;
  // }

  this.show_upd = function(show_sett) {
    if (!this.running) {
      return 0;
    }
    if (this.col <= 0) {
      this.delete = true;
    }
    dir = floor(random(4));
    len = floor(random(show_sett.max_jump));
    if (dir < 2) {
      if (dir < 1) {
        // case 0:
        x = len;
        y = 0;
      } else {
        // case 1:
        x = 0;
        y = len;
      }
    } else {
      if (dir < 3) {
        // case 2:
        x = -len;
        y = 0;
      } else {
        // case 3:
        x = 0;
        y = -len;
      }
    }
    if (show_sett.decrease_in_color){
      this.col -= len;
    }
    this.pos.x += x;
    this.pos.y += y;
    if (show_sett.dont_leave_the_canvas) {
      this.pos = set_pos_back(createVector(this.pos.x, this.pos.y), show_sett);
    } else {
      // this.pos = createVector(this.pos.x, this.pos.y);
    }

    if (!show_sett.zero_to_max_coloring) {
      col = this.col * 255 / show_sett.max_col;
    } else {
      col = 255 - this.col * 255 / show_sett.max_col;
    }
    fill(col, col, col);
    x0 = (this.pos.x + show_sett.sidelength) * show_sett.point_width;
    y0 = (this.pos.y + show_sett.sidelength) * show_sett.point_height;
    if (show_sett.draw_ellipses) {
      ellipse(x0, y0, show_sett.point_width * show_sett.point_size, show_sett.point_height * show_sett.point_size);
    } else {
      rect(x0, y0, show_sett.point_width * show_sett.point_size, show_sett.point_height * show_sett.point_size);
    }
    // console_log('pos: ' + str(x0) + ' ' + str(y0));
    // console_log('dist: ' + str(point_width) + ' ' + str(point_height));
    return 0;
  }

  this.save = function(save_sett) {
    if (!this.running) {
      return 0;
    }
    if (!save_sett.zero_to_max_coloring) {
      col = this.col * 255 / save_sett.max_col;
    } else {
      col = 255 - this.col * 255 / save_sett.max_col;
    }
    try {
      if (get_boolean()) {
        save_sett.Pixel_colors[this.pos.x + save_sett.sidelength][this.pos.y + show_sett.sidelength] = col;
      }
    } catch (Exception) {
    }
  }

  this.make_random_start_pos = function(pos_sett) {
    this.pos.x = floor(random(-pos_sett.sidelength, pos_sett.sidelength)) + Poi_sett.center.x;
    this.pos.y = floor(random(-pos_sett.sidelength, pos_sett.sidelength)) + Poi_sett.center.y;
  }
  return 0;
}

function get_boolean(pos_sett) {
  sobc = pos_sett.save_only_bigger_colors;
  Pcbc = pos_sett.Pixel_colors[this.pos.x + pos_sett.sidelength][this.pos.y + pos_sett.sidelength] > col;
  sosc = pos_sett.save_only_smallr_colors;
  Pcsc = pos_sett.Pixel_colors[this.pos.x + pos_sett.sidelength][this.pos.y + pos_sett.sidelength] < col;
  if (sobc &&
      Pcbc) { //if only bigger colors are set to change and the Pixel_colors are bigger
    return true;
  }
  if (sosc &&
      Pcsc) { //if only smaller colors are set to change and the Pixel_colors are smaller
    return true;
  }
  return false; //it doesn't fit
}
