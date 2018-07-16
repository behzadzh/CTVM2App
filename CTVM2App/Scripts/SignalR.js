//immediate invoked function expression (IIFE)
(function() {
    $.connection.hub.start()
        .done(function () {
            console.log("IT WORK!");
            $.connection.myHub.server.announce("Connected!");
        })
        .fail(function () { alert("ERROR!!!!"); });

    $.connection.myHub.client.announce = function (message) {

        $("#welcome-messages").append(message + "<br />");
    }
})()
//git test change
