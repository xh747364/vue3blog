<template>
  <el-card class="box-card" shadow="always">
    <div class="main-wrap">
      <div id="canvas-context">
        <canvas id="myCanvas" width="1280" height="720"></canvas>
        <div id="rectdiv"></div>
      </div>
      <ul class="btn-list">
        <span id="pointxy">X: 0, Y: 0</span>
      </ul>
      <div id="box-color" class="box box-color">
        <span class="color-card active" style="color: rgb(0, 0, 0)"></span
        ><span class="color-card" style="color: rgb(255, 255, 255)"></span
        ><span class="color-card" style="color: rgb(170, 170, 170)"></span
        ><span class="color-card" style="color: rgb(85, 85, 85)"></span
        ><span class="color-card" style="color: rgb(254, 211, 199)"></span
        ><span class="color-card" style="color: rgb(255, 196, 206)"></span
        ><span class="color-card" style="color: rgb(250, 172, 142)"></span
        ><span class="color-card" style="color: rgb(255, 139, 131)"></span
        ><span class="color-card" style="color: rgb(244, 67, 54)"></span
        ><span class="color-card" style="color: rgb(233, 30, 99)"></span
        ><span class="color-card" style="color: rgb(226, 102, 158)"></span
        ><span class="color-card" style="color: rgb(156, 39, 176)"></span
        ><span class="color-card" style="color: rgb(103, 58, 183)"></span
        ><span class="color-card" style="color: rgb(63, 81, 181)"></span
        ><span class="color-card" style="color: rgb(0, 70, 112)"></span
        ><span class="color-card" style="color: rgb(5, 113, 151)"></span
        ><span class="color-card" style="color: rgb(33, 150, 243)"></span
        ><span class="color-card" style="color: rgb(0, 188, 212)"></span
        ><span class="color-card" style="color: rgb(59, 229, 219)"></span
        ><span class="color-card" style="color: rgb(151, 253, 220)"></span
        ><span class="color-card" style="color: rgb(22, 115, 0)"></span
        ><span class="color-card" style="color: rgb(55, 169, 60)"></span
        ><span class="color-card" style="color: rgb(137, 230, 66)"></span
        ><span class="color-card" style="color: rgb(215, 255, 7)"></span
        ><span class="color-card" style="color: rgb(255, 246, 209)"></span
        ><span class="color-card" style="color: rgb(248, 203, 140)"></span
        ><span class="color-card" style="color: rgb(255, 235, 59)"></span
        ><span class="color-card" style="color: rgb(255, 193, 7)"></span
        ><span class="color-card" style="color: rgb(255, 152, 0)"></span
        ><span class="color-card" style="color: rgb(255, 87, 34)"></span
        ><span class="color-card" style="color: rgb(184, 63, 39)"></span
        ><span class="color-card" style="color: rgb(121, 85, 72)"></span>
      </div>
    </div>
    <div class="mobile-wrap">暂不支持移动端，请使用PC端访问</div>
  </el-card>
</template>

<script>
import { defineComponent, onMounted } from "@vue/runtime-core";
export default defineComponent({
  setup() {
    onMounted(() => {
      var canvasContext = document.getElementById("canvas-context");
      var rectdiv = document.getElementById("rectdiv");
      let showPoint = false;

      function rectdivStyle(ev) {
        var cRect = canvasContext.getBoundingClientRect();
        var canvasX = Math.round(ev.clientX - cRect.left);
        var canvasY = Math.round(ev.clientY - cRect.top);
        document.getElementById("pointxy").innerHTML =
          "X: " + canvasX + ", Y: " + canvasY;
        if (!showPoint) {
          return;
        }
        rectdiv.style.display = "block";
        rectdiv.style.top = canvasY + "px";
        rectdiv.style.left = canvasX + "px";
        rectdiv.style.width = penSize[0] + "px";
        rectdiv.style.height = penSize[0] + "px";
      }
      canvasContext.addEventListener("mousemove", function (ev) {
        if (isWrite) {
          rectdivStyle(ev);
        }
      });
      canvasContext.addEventListener("mouseleave", function (ev) {
        rectdiv.style.display = "none";
        isWrite = false;
      });
      canvasContext.addEventListener("mousedown", function (ev) {
        if (isWrite) {
          rectdiv.style.display = "block";
          showPoint = false;
        }
      });
      canvasContext.addEventListener("mouseup", function (ev) {
        if (isWrite) {
          rectdiv.style.display = "block";
          showPoint = true;
        }
      });
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      var bool = true;
      let color = "#000000";
      // 画笔大小
      let penSize = [1, 1];
      var img = new Image();
      img.src =
        "https://assets.muniao.com/UploadFiles/root/room/123627/thumb/1e0885f6524642569b408ab8a951cc4e.jpg_610_384.jpg";
      img.onload = function () {
        ctx.drawImage(this, 0, 0, 1280, 720);
      };
      let cx = 0;
      let cy = 0;
      let cl = 0;
      let ct = 0;
      let isDown = false;
      let isWrite = false;
      canvas.addEventListener("mousedown", function (ev) {
        //开关打开
        if (!isWrite) {
          //获取x坐标和y坐标
          cx = ev.clientX;
          cy = ev.clientY;
          //获取左部和顶部的偏移量
          cl = canvas.offsetLeft;
          ct = canvas.offsetTop;
          isDown = true;
          canvas.style.cursor = "move";
          // return;
        } else {
          canvas.style.cursor = "default";
          var cRect = canvas.getBoundingClientRect();
          var canvasX = Math.round(ev.clientX - cRect.left);
          var canvasY = Math.round(ev.clientY - cRect.top);
          ev = ev || window.event;
          bool = true;
          if (canvasX % 10 >= 0) {
            canvasX = canvasX - (canvasX % 10);
          }
          if (canvasY % 10 >= 0) {
            canvasY = canvasY - (canvasY % 10);
          }
          ctx.fillStyle = color;
          ctx.fillRect(
            canvasX / resize,
            canvasY / resize,
            penSize[0] / resize,
            penSize[0] / resize
          );
        }

        canvas.addEventListener("mousemove", function (e) {
          if (!isWrite) {
            if (isDown == false) {
              return;
            }
            //获取x和y
            var nx = e.clientX;
            var ny = e.clientY;
            //计算移动后的左偏移量和顶部的偏移量
            var nl = nx - (cx - cl);
            var nt = ny - (cy - ct);
            nl =
              nl > 0
                ? 0
                : -nl > canvas.width * resize - canvas.width
                ? (nl = -canvas.width * resize + canvas.width)
                : nl;
            nt =
              nt > 0
                ? 0
                : -nt > canvas.height * resize - canvas.height
                ? (nt = -canvas.height * resize + canvas.height)
                : nt;
            canvas.style.left = nl + "px";
            canvas.style.top = nt + "px";
            return;
          }

          var cRect = canvas.getBoundingClientRect();
          var canvasX = Math.round(e.clientX - cRect.left);
          var canvasY = Math.round(e.clientY - cRect.top);
          if (bool) {
            e = e || window.event;
            let pointX = canvasX;
            let pointY = canvasY;
            if (canvasX % penSize[0] >= 0) {
              pointX = canvasX - (canvasX % penSize[0]);
            }
            if (canvasY % penSize[0] >= 0) {
              pointY = canvasY - (canvasY % penSize[0]);
            }
            ctx.fillRect(
              pointX / resize,
              pointY / resize,
              penSize[0] / resize,
              penSize[0] / resize
            );
          }
        });
        canvas.addEventListener("mouseup", function (e) {
          bool = false;
          isDown = false;
          canvas.style.cursor = "move";
        });
      });

      let resize = 1;
      canvas.addEventListener(
        "mousewheel",
        function (e) {
          const direction = e.wheelDelta > 0 ? 1 : -1;
          resize += 1 * direction;
          resize = Math.min(10, Math.max(1, resize));
          if (resize == 0 || resize > 10) return;
          penSize = [resize, resize];
          rectdivStyle(e);
          //获取鼠标在canvas中坐标
          var cRect = canvas.getBoundingClientRect();
          var canvasX = Math.round(e.clientX - cRect.left);
          var canvasY = Math.round(e.clientY - cRect.top);
          if (canvasX % resize >= 0) {
            canvasX = canvasX - (canvasX % resize);
          }
          if (canvasY % resize >= 0) {
            canvasY = canvasY - (canvasY % resize);
          }
          var nl = -canvasX * resize;
          var nt = -canvasY * resize;
          console.log(-nl, canvas.width * resize - canvas.width);
          nl =
            nl > 0
              ? 0
              : -nl > canvas.width * resize - canvas.width
              ? (nl = -canvas.width * resize + canvas.width)
              : nl;
          nt =
            nt > 0
              ? 0
              : -nt > canvas.height * resize - canvas.height
              ? (nt = -canvas.height * resize + canvas.height)
              : nt;
          if (resize == 1) {
            nl = 0;
            nt = 0;
            canvas.style.cursor = "default";
          } else {
            canvas.style.cursor = "move";
          }
          isWrite = false;
          canvas.style.top = nt + "px";
          canvas.style.left = nl + "px";
          canvas.style.transform = `scale(${resize})`;
        },
        false
      );
    });
  },
});
</script>

<style scoped>
#app{
    overflow: hidden;
}
#canvas-context {
  position: relative;
  width: 1280px;
  height: 720px;
  overflow: hidden;
  margin-top: 50px;
  /* margin-left: 50px; */
}

#rectdiv {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #000000;
  box-sizing: border-box;
  display: none;
  pointer-events: none;
}

.btn-list {
  position: absolute;
  right: -220px;
  top: 0;
  width: 200px;
}

.main-wrap {
  position: relative;
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.box {
  width: 80px;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 6px;
}

.box-color .color-card {
  width: 26px;
  height: 26px;
  background-color: currentColor;
  border-radius: 4px;
  display: inline-block;
  margin: 4px;
  vertical-align: bottom;
  border: 1px solid transparent;
  cursor: pointer;
}

.box-color .color-card.active {
  transform: scale(1);
  box-shadow: 0 0 4px rgb(0 0 0 / 70%);
}

#myCanvas {
  position: absolute;
  top: 0;
  left: 0;
  image-rendering: pixelated;
  transform-origin: top left;
}

.mobile-wrap{
    display: none;
    text-align: center;
    color: #333;
    font-size: 28px;
}

@media screen and (max-width: 1300px) {
    .main-wrap{
        display: none;
    }
    .mobile-wrap{
        display: block;
    }
}
</style>