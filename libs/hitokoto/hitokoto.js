$(function () {
  async function getHitTalk() {
    return new Promise((resolve, reject) => {
        $.axios
          .get("https://v1.hitokoto.cn/?c=d&c=i&encode=json&lang=cn")

          .then(
            (response) => {
              resolve(response.data);
            },
            (error) => {
              reject(error);
            }
          );
      })
      .then((data) => {
        this.hitText = data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function CopyText(e) {
    const clipboard = new Clipboard(e.target, {
      text: () => $(".hit-talk-meta").text(),
    });

    clipboard.on("success", () => {
      this.ShowTip();
      clipboard.off("error");
      clipboard.off("success");
      clipboard.destroy();
    });

    clipboard.on("error", () => {
      clipboard.off("error");
      clipboard.off("success");
      clipboard.destroy();
    });
    clipboard.onClick(e);
  }

  //复制成功的提示文本
  function ShowTip() {
    let $d = document.createElement("div");
    let $i = document.createElement("i");
    let $s = document.createElement("span");

    $d.style.width = 180 + "px";
    $d.style.height = 42 + "px";
    $d.style.backgroundColor = "rgb(22, 22, 22)";
    $d.style.textAlign = "center";
    $d.style.lineHeight = 42 + "px";
    $d.style.color = "rgb(103, 194, 58)";
    $d.style.fontSize = 14 + "px";
    $d.style.borderRadius = 8 + "px";
    $d.style.position = "absolute";
    $d.style.top = 32 + "px";
    $d.style.left = 50 + "%";
    $d.style.transform = `translateX(${-50}%)`;
    $d.style.transition = "all 1s linear";
    $d.style.zIndex = 99999;

    $i.style.marginRight = 4 + "px";
    $i.className = "iconfont icon-chenggong";
    $s.innerHTML = "已复制到剪贴板";

    $d.appendChild($i);
    $d.appendChild($s);

    document.body.appendChild($d);

    var timer = setTimeout(() => {
      $d.style.top = $d.offsetTop - 84 + "px";
      clearTimeout(timer);
      var cleartimer = setTimeout(() => {
        document.body.removeChild($d);
        clearTimeout(cleartimer);
      }, 1000);
    }, 3000);
  }

  getHitTalk();
});