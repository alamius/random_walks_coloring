var P = [];
var amount = 120;
var max_jump = 1 + 5;
var sidelength = 400;
var point_height;
var point_width;
var max_col = 5000;
var Pixel_colors = [];
var deaths = 0;
var running = true;
var h = 400;
var w = 400;
var max_drawn = 0;
var control_val = false;
var save_only_bigger_colors = false; //one makes the other impossible!
var save_only_smallr_colors = false;
var dont_leave_the_canvas = true;
var keep_the_canvas_without_background = false;
var decrease_in_color = true;
var keep_position = false;
var random_start_position = true;
var save_frames = false;
var save_frames_location = 'SAVE/';
var zero_to_max_coloring = false;
var bg_color = [0, 0, 0];
var draw_ellipses = false;
var point_size = 1;

function setup() {
  createCanvas(w * 2, h * 2);
  // stroke(255);
  noStroke();
  background(bg_color[0], bg_color[1], bg_color[2]);
  point_height = h / sidelength;
  point_width = w / sidelength;
  for (i = 0; i < amount; i += 1) {
    P.push(new Point());
    if (random_start_position) {
      P[i].make_random_start_pos();
    }
  }
  for (x = -sidelength; x < sidelength; x += 1) {
    Pixel_colors.push([]);
    for (y = -sidelength; y < sidelength; y += 1) {
      Pixel_colors[x + sidelength].push(0);
    }
  }
}

function draw() {
  if (keep_the_canvas_without_background){
    background(bg_color[0], bg_color[1], bg_color[2]);
  }
  draw1();
  if (save_frames) {
    saveFrames(save_frames_location + "image-", "png", 1, 10);
  }
}

function draw1() {
  for (i = 0; i < amount; i += 1) {
    // P[i].show();
    // P[i].upd();
    P[i].show_upd();
    if (P[i].delete) {
      if (keep_position) {
        pos = P[i].pos;
      }
      P[i] = new Point();
      if (keep_position) {
        P[i].pos = pos;
      }
      deaths += 1;
      // console_log(ceil(deaths / amount));
    }
  }
}

function draw2() { //not displaying...
  for (i = 0; i < amount; i += 1) {
    P[i].save();
    P[i].upd();
    if (P[i].delete) {
      if (keep_position) {
        pos = P[i].pos;
      }
      P[i] = new Point();
      if (keep_position) {
        P[i].pos = pos;
      }
      deaths += 1;
      console_log(ceil(deaths / amount));
    }
  }
  c_deaths = ceil(deaths / amount);
  if ((c_deaths % 1 == 0) && (c_deaths > max_drawn)) {
    Pixels_show();
    max_drawn = c_deaths;
  }
}


function set_pos_back(pos) {
  if (pos.x > sidelength) {
    pos.x = sidelength - 1;
  }
  if (pos.x < -sidelength) {
    pos.x =  - (sidelength - 1);
  }
  if (pos.y > sidelength) {
    pos.y = sidelength - 1;
  }
  if (pos.y < -sidelength) {
    pos.y =  - (sidelength - 1);
  }
  return pos;
}
