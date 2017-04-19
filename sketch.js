var P = []; //Point array
var amount = 0;
var max_jump = 1 + 5;
var sidelength = 400;
var point_height;
var point_width;
var max_col = 500;
var use_Pixel_colors = false;
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
var keep_setts = true; //in case of adding new P_Cs while old ones are still running
var random_start_position = true;
var save_frames = false;
var save_frames_location = 'SAVE/';
var zero_to_max_coloring = false;
var bg_color = [0, 0, 0];
var draw_ellipses = false;
var point_size = 1.5;
var sync_after_deaths = false;
var reproduce = false;
var reproduction_adds = 1; //cool: use likeliness of about 0.1 or so for slower, but still exponential growth
var sett;
var P_C = []; //Points_Center array
var P_C_amount = 0;
var add_to_P_C_by_click = true;
var sidelength_divisor = 1.5;

function setup() {
  sett = new Settings(0, 0);
  createCanvas(w * 2, h * 2);
  // stroke(255);
  noStroke();
  background(sett.bg_color[0], sett.bg_color[1], sett.bg_color[2]);
  sett.point_height = sett.h / sett.sidelength;
  sett.point_width = sett.w / sett.sidelength;

  for (i = 0; i < sett.amount; i += 1) {
    P.push(new Point(sett));
    if (sett.random_start_position) {
      P[i].make_random_start_pos(sett);
    }
  }
  for (j = 0; j < P_C_amount; j += 1) {
    P_C.push(new Points_Center(500, 500));
    P_C[j].sett.amount = 1;
    P_C[j].sett.sidelength = sett.sidelength / 5;
    P_C[j].sett.h = sett.h / 5;
    P_C[j].sett.w = sett.w / 5;
    P_C[j].setup();
  }
  if (sett.use_Pixel_colors) {
    for (x = -sett.sidelength; x < sett.sidelength; x += 1) {
      sett.Pixel_colors.push([]);
      for (y = -sett.sidelength; y < sett.sidelength; y += 1) {
        sett.Pixel_colors[x + sett.sidelength].push(0);
      }
    }
  }
}

function draw() {
  if (sett.keep_the_canvas_without_background){
    background(sett.bg_color[0], sett.bg_color[1], sett.bg_color[2]);
  }
  draw1();
  for (j = 0; j < P_C.length; j += 1) {
    P_C[j].draw();
  }
  if (sett.save_frames) {
    saveFrames(sett.save_frames_location + "image-", "png", 1, 10);
  }
}

function draw1() {
  for (i = 0; i < P.length; i += 1) {
    // P[i].show();
    // P[i].upd();
    P[i].show_upd();
    if (P[i].delete) {
      if (sett.keep_position) {
        pos = P[i].pos;
      }
      
      P[i] = new Point();
      if (sett.keep_position) {
        P[i].pos = pos;
      }
      if (sett.reproduce) {
        reproduction();
      }
      if (sett.sync_after_deaths) {
        P[i].running = false;
        reset_if_all_are_not_running();
      }
      sett.deaths += 1;
      // console_log(ceil(deaths / amount));
    }
  }
}

// function draw2() { //not displaying...
//   for (i = 0; i < amount; i += 1) {
//     P[i].save();
//     P[i].upd();
//     if (P[i].delete) {
//       if (keep_position) {
//         pos = P[i].pos;
//       }
//       P[i] = new Point();
//       if (keep_position) {
//         P[i].pos = pos;
//       }
//       deaths += 1;
//       console_log(ceil(deaths / amount));
//     }
//   }
//   c_deaths = ceil(deaths / amount);
//   if ((c_deaths % 1 == 0) && (c_deaths > max_drawn)) {
//     Pixels_show();
//     max_drawn = c_deaths;
//   }
// }


function set_pos_back(pos, show_sett) {  // TODO
  if (pos.x > show_sett.sidelength + show_sett.center.x) {
    pos.x = show_sett.sidelength - 1 + show_sett.center.x;
  }
  if (pos.x < -show_sett.sidelength + show_sett.center.x) {
    pos.x =  - (show_sett.sidelength - 1  + show_sett.center.x);
  }
  if (pos.y > show_sett.sidelength + show_sett.center.y) {
    pos.y = show_sett.sidelength - 1  + show_sett.center.y;
  }
  if (pos.y < -show_sett.sidelength + show_sett.center.y) {
    pos.y =  - (show_sett.sidelength - 1  + show_sett.center.y);
  }
  return pos;
}

function reset_if_all_are_not_running() {
  console_log('reset_if_..._()');
  for (i = 0; i < P.length; i += 1) {
    if (P[i].running) {
      return false;
    }
  }
  //all are false!
  for (i = 0; i < P.length; i += 1) {
    P[i].running = true;
  }
}

function reproduction() {
  for (n = 0; n < sett.reproduction_adds; n += 1) {
    if (sett.keep_position) {
      pos = P[i].pos;
    }
    P.push(new Point(sett));
    if (sett.keep_position) {
      P[P.length - 1].pos = pos;
    }
    if (sett.sync_after_deaths) {
      P[P.length - 1].running = false;
    }
  }
}
