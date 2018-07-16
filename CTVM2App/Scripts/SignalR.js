//immediate invoked function expression (IIFE)
(function () {
    var myHub = $.connection.myHub;
    $.connection.hub.start()
        .done(function () {
            //console.log("IT WORK!");
            writeToPage("IT WORK!");
            myHub.server.announce("Connected!");
        })
        //.fail(function () { alert("ERROR!!!!"); });
        .fail(function () { writeToPage("Error connecting to SignalR"); });

    myHub.client.announce = function (message) {

        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }
})()
//git test change
