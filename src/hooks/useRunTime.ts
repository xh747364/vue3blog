import { ToRefs, ref } from "@vue/reactivity";

export const runTime = (): ToRefs => {
    const startTime = "2019/05/05 10:58:00";
    const runTimes = ref("2019/05/05 10:58:00");
    const calculationTime = function () {
      const s1 = new Date(startTime.replace(/-/g, "/")).getTime();
      const s2 = new Date().getTime();
      let runTime = ((s2 - s1) / 1000);
      const year = Math.floor(runTime / 86400 / 365);
      runTime = runTime % (86400 * 365);
      const month = Math.floor(runTime / 86400 / 30);
      runTime = runTime % (86400 * 30);
      const day = Math.floor(runTime / 86400);
      runTime = runTime % 86400;
      const hour = Math.floor(runTime / 3600);
      runTime = runTime % 3600;
      const minute = Math.floor(runTime / 60);
      runTime = runTime % 60;
      const second = runTime.toFixed(0);
      runTimes.value = `${year}年${month}月${day}日${hour}时${minute}分${second}秒`;
    };
    setInterval(calculationTime, 1000);
    return {
        runTimes
    }
}