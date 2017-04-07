function Pixels_show() {
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
