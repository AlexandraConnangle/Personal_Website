var smallMenuModel = {

    menu_open: "<div class=\"line-menu-x1\"></div><div class=\"line-menu-x2\"></div>",
    menu_closed: "<div class=\"line-menu\"></div><div class=\"line-menu\"></div><div class=\"line-menu\"></div><div class=\"line-menu\"></div>",

    switch_on: function () {
        document.getElementById("small-menu").innerHTML = this.menu_open;
    },
    switch_off: function () {
        document.getElementById("small-menu").innerHTML = this.menu_closed;
    }
}
