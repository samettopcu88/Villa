(function ($) {
    'use strict';

    $(function () {
        $(".bs-submit").on("click", function (event) {
            // Özel Bootstrap doðrulamasýný uygulamak için formu al
            var form = $(".needs-validation");

            if (form[0].checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.addClass('was-validated');

            // AJAX çaðrýsýný burada yapabilirsiniz
        });
    });

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    // Sadece sayýsal girdi alacak þekilde onaylamak için
    // HTML'de <input type="text" class="shouldNumber" /> elementini kullanýn
    $('.shouldNumber').on('keypress', function (event) {
        return isNumberKey(event);
    });

})(jQuery);
