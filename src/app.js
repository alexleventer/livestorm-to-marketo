"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(constants_1.PORT, function () {
    console.log("App is running on port ".concat(constants_1.PORT));
});
