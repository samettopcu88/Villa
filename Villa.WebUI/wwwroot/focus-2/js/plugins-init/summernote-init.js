$(function () {
    $(".summernote").summernote({
        height: 190,
        minHeight: null,
        maxHeight: null,
        focus: false
    });

    $(".inline-editor").summernote({
        airMode: true
    });
});

window.edit = function () {
    $(".click2edit").summernote();
};

window.save = function () {
    $(".click2edit").summernote("destroy");
};
