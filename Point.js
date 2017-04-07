function Point() {
  this.pos = createVector(0, 0);
  this.col = max_col;
  this.delete = false;
  this.last_pos = createVector(0, 0);

  this.upd = function() {
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

  this.show = function() {
    if (!zero_to_max_coloring) {
      col = this.col * 255 / max_col;
    } else {
      col = 255 - this.col * 255 / max_col;
    }
    fill(col, col, col);

    x0 = (this.pos.x + sidelength) * point_width;
    y0 = (this.pos.y + sidelength) * point_height;
    rect(x0, y0, point_width, point_height);
    // console_log('pos: ' + str(x0) + ' ' + str(y0));
    // console_log('dist: ' + str(point_width) + ' ' + str(point_height));
    return 0;
  }

  this.show_upd = function() {
    if (this.col <= 0) {
      this.delete = true;
    }
    dir = floor(random(4));
    len = floor(random(max_jump));
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

    if (!zero_to_max_coloring) {
      col = this.col * 255 / max_col;
    } else {
      col = 255 - this.col * 255 / max_col;
    }
    fill(col, col, col);
    x0 = (this.pos.x + sidelength) * point_width;
    y0 = (this.pos.y + sidelength) * point_height;
    if (draw_ellipses) {
      ellipse(x0, y0, point_width * point_size, point_height * point_size);
    } else {
      rect(x0, y0, point_width * point_size, point_height * point_size);
    }
    // console_log('pos: ' + str(x0) + ' ' + str(y0));
    // console_log('dist: ' + str(point_width) + ' ' + str(point_height));
    return 0;
  }

  this.save = function() {
    if (!zero_to_max_coloring) {
      col = this.col * 255 / max_col;
    } else {
      col = 255 - this.col * 255 / max_col;
    }
    try {
      if (get_boolean()) {
        Pixel_colors[this.pos.x + sidelength][this.pos.y + sidelength] = col;
      }
    } catch (Exception) {
    }
  }

  this.make_random_start_pos = function() {
    this.pos.x = floor(random(-sidelength, sidelength));
    this.pos.y = floor(random(-sidelength, sidelength));
  }
  return 0;
}

function get_boolean() {
  sobc = save_only_bigger_colors;
  Pcbc = Pixel_colors[this.pos.x + sidelength][this.pos.y + sidelength] > col;
  sosc = save_only_smallr_colors;
  Pcsc = Pixel_colors[this.pos.x + sidelength][this.pos.y + sidelength] < col;
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
