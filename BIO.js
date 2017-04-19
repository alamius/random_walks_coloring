function Pixels_show() { //not adapted to Settings-system
  for (x = 0; x < Pixel_colors.length; x += 1) {
    for (y = 0; y < Pixel_colors[0].length; y += 1) {
      Pc = Pixel_colors[x][y];
      if (!(Pc === 0)) {
        fill(Pc, Pc, Pc);
        rect(x * point_width, y * point_height, point_width, point_height);
      }
    }
  }
  // console_log('done Pixels_show!')
  return 0;
}

function console_log(s) {
  if (control_val) {
    console.log(s);
  }
}

function keyPressed() {
  if (keyCode == 32) {
    if (running) {
      Pixels_show();
      noLoop();
      running = false;
    } else {
      loop();
      running = true;
      console_log('continued!')
    }
  }
}

function div(a, b) {
  c = 0;
  while (a > 0) {
    a -= b;
  }
  return c;
}

function mousePressed() {
  if (add_to_P_C_by_click) {
    add_to_P_C(mouseX * sett.point_width, mouseY * sett.point_height, 100);
  }
}

function add_to_P_C(x_center, y_center, sett_amount) {
  console.log('mousePressed!');
  sidelength_divisor = 1.5;
  P_C.push(new Points_Center(x_center - sett.sidelength / sidelength_divisor, y_center - sett.sidelength / sidelength_divisor));
  n = P_C.length - 1;
  P_C[n].sett.amount = sett_amount;
  P_C[n].sett.sidelength = sett.sidelength / sidelength_divisor;
  P_C[n].sett.h = sett.h / sidelength_divisor;
  P_C[n].sett.w = sett.w / sidelength_divisor;
  P_C[n].setup();
  return n;
}

// add_to_P_C(400, 300, 3)
