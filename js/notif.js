document.addEventListener("DOMContentLoaded", function() {
    const lordB = document.getElementById("lordbutton");
    const lordimg = lordB.querySelector("img");
    
    const checkB = document.getElementById("checkb");
    var priv = false;

    checkB.addEventListener("click", function() {
        if (!priv) {
            checkB.style.background = "var(--bg-color) url(/check.png) no-repeat center 40%";
        } else {
            checkB.style.background = "var(--bg-color)";
        };

        priv = !priv;
        console.log(priv);
    });

    lordB.addEventListener("click", function() {
        console.log("button pressed, notifying lord");

        // change image to pressed version
        lordimg.src = "./lordbuttonpress.png";

        // change it back after 150ms (adjust to taste)
        setTimeout(() => {
            lordimg.src = "./lordbutton.png";
        }, 150);

        if (priv) {
            fetch("https://discord.com/api/webhooks/1492063213359992943/-LtH-7uWaurkF1kKuiFdjs0srv-Gv5XOSg9lh4l6IYaSCjnw-38yNZpuUE3RcZ4_y2YO", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: "<@729577277263708211>"
                })
            });
        } else {
            fetch("https://discord.com/api/webhooks/1432664667477770333/rI5LyYTAYZXAomNVdnJOGfuYZGs1qvRqTn5X91X8g7Kzl-26GPEZXetwWZgU2_UiTVeN", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: "<@729577277263708211>"
                })
            });
        };
    });
});