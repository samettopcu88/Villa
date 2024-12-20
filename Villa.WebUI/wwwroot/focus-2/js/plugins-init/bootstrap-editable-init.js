$(function () {
    $("#username").editable({ type: "text", pk: 1, name: "username", title: "Enter username" });
    $("#firstname").editable({
        validate: function (e) {
            if ("" === e.trim()) return "This field is required";
        }
    });
    $("#sex").editable({
        prepend: "not selected",
        source: [{ value: 1, text: "Male" }, { value: 2, text: "Female" }],
        display: function (e, t) {
            var i = $.grep(t, function (t) { return t.value == e; });
            if (i.length) {
                $(this).text(i[0].text).css("color", { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" }[e]);
            } else {
                $(this).empty();
            }
        }
    });
    $("#status").editable();
    $("#group").editable({ showbuttons: false });
    $("#dob").editable();
    $("#comments").editable({ showbuttons: "bottom" });
    $("#inline-username").editable({ type: "text", pk: 1, name: "username", title: "Enter username", mode: "inline" });
    $("#inline-firstname").editable({
        validate: function (e) {
            if ("" === e.trim()) return "This field is required";
        },
        mode: "inline"
    });
    $("#inline-sex").editable({
        prepend: "not selected",
        mode: "inline",
        source: [{ value: 1, text: "Male" }, { value: 2, text: "Female" }],
        display: function (e, t) {
            var i = $.grep(t, function (t) { return t.value == e; });
            if (i.length) {
                $(this).text(i[0].text).css("color", { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" }[e]);
            } else {
                $(this).empty();
            }
        }
    });
    $("#inline-status").editable({ mode: "inline" });
    $("#inline-group").editable({ showbuttons: false, mode: "inline" });
    $("#inline-dob").editable({ mode: "inline" });
    $("#inline-comments").editable({ showbuttons: "bottom", mode: "inline" });
});
