! function (e, t, a) {
    function r() {
        for (var e = 0; e < n.length; e++) n[e].alpha <= 0 ? (t.body.removeChild(n[e].el), n.splice(e, 1)) : (n[e].y--, n[e].scale += .004, n[e].alpha -= .013, n[e].el.style.cssText = "left:" + n[e].x + "px;top:" + n[e].y + "px;opacity:" + n[e].alpha + ";transform:scale(" + n[e].scale + "," + n[e].scale + ") rotate(45deg);background:" + n[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }
    var n = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        },
        function (e) {
            var a = t.createElement("style");
            a.type = "text/css";
            try {
                a.appendChild(t.createTextNode(e))
            } catch (t) {
                a.styleSheet.cssText = e
            }
            t.getElementsByTagName("head")[0].appendChild(a)
        }(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        function () {
            var a = "function" == typeof e.onclick && e.onclick;
            e.onclick = function (e) {
                a && a(),
                    function (e) {
                        var a = t.createElement("div");
                        a.className = "heart", n.push({
                            el: a,
                            x: e.clientX - 5,
                            y: e.clientY - 5,
                            scale: 1,
                            alpha: 1,
                            color: "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
                        }), t.body.appendChild(a)
                    }(e)
            }
        }(), r()
}(window, document);

// ! function () {
//     var a_idx = 0;

//     function getRandomColor(max, min) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     var body = document.body
//     body.onclick = function (e) {
//         var k = e || window.event;
//         const a = ["❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤", "❤敬业❤", "❤诚信❤", "❤友善❤"]
//         var $w = document.createElement('span')
//         $w.innerHTML = a[a_idx]
//         a_idx = (a_idx + 1) % a.length;
//         $w.style.zIndex = 99999
//         $w.style.top = k.pageY - 20 + 'px'
//         $w.style.left = k.pageX + 'px'
//         $w.style.position = "absolute"
//         $w.style.fontWeight = "blod"
//         $w.style.color = `rgb(${getRandomColor(255,0)},${getRandomColor(255,0)},${getRandomColor(255,0)})`
//         $w.style.userSelect = "none"
//         $w.style.cursor = "default"
//         $w.style.opacity = 1
//         $w.style.transition = "all 2.5s"
//         body.appendChild($w)
//         var timer = setTimeout(() => {
//             $w.style.top = k.pageY - 180 + 'px'
//             $w.style.opacity = 0
//             clearTimeout(timer)
//             var cleartimer = setTimeout(() => {
//                 body.removeChild($w)
//                 clearTimeout(cleartimer)
//             }, 1000);
//         })
//     }
// }(window, document);