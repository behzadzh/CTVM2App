//immediate invoked function expression (IIFE)
(function () {
    var chat = $.connection.chat;
    $.connection.hub.start()
        .done(function () {
            //console.log("IT WORK!");
            $.connection.hub.logging = true;
            writeToPage("IT WORK!");
            $.connection.hub.log("Connected!!!");
            chat.server.annonceToEverybody("Connected!");
            //chat.server.getServerDateTime()
            //    .done(function(data) {
            //        writeToPage(data);
            //    })
            //    .fail(function(e) {
            //        writeToPage(e);
            //    });
        })
        //.fail(function () { alert("ERROR!!!!"); });
        .fail(function () { writeToPage("Error connecting to SignalR"); });

    chat.client.announce = function (message) {

        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }

    $("#click-me").on("click",
        function () {
            chat.server.getServerDateTime()
                .done(function (data) {
                    writeToPage(data);
                })
                .fail(function (e) {
                    writeToPage(e);
                });
        });
})()
//git test change
