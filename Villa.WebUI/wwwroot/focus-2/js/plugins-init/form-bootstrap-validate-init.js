(function ($) {
    'use strict';

    $(function () {
        $(".bs-submit").on("click", function (event) {
            // �zel Bootstrap do�rulamas�n� uygulamak i�in formu al
            var form = $(".needs-validation");

            if (form[0].checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.addClass('was-validated');

            // AJAX �a�r�s�n� burada yapabilirsiniz
        });
    });

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    // Sadece say�sal girdi alacak �ekilde onaylamak i�in
    // HTML'de <input type="text" class="shouldNumber" /> elementini kullan�n
    $('.shouldNumber').on('keypress', function (event) {
        return isNumberKey(event);
    });

})(jQuery);
