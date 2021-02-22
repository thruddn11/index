setRootScale()

    function setRootScale() {
        var root = document.querySelector('#wrap');
        var ratioX = window.innerWidth / 1280;
        var ratioY = window.innerHeight / 800;
        var ratio = ratioX > ratioY ? ratioY : ratioX;
        scale_ratio = ratio;
        var newLeftPos = Math.abs(Math.floor((1280 * ratio - window.innerWidth) / 2));
        var newTopPos = Math.abs(Math.floor((800 * ratio - window.innerHeight) / 2));
        root.setAttribute(
            "style",
            "left: " +
            newLeftPos +
            "px;" +
            "top: " +
            newTopPos +
            "px;" +
            "transform: scale(" +
            ratio +
            "," +
            ratio +
            "); -webkit-transform: scale(" +
            ratio +
            "," +
            ratio +
            "); -ms-transform: scale(" +
            ratio +
            "," +
            ratio +
            ");"
        );
        root.style.visibility = "visible";
        broadcaster.trigger("RESIZE_WINDOW", { windowRatio: ratio });
    }