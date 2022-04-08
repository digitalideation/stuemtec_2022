$(document).ready(function() {
    $(document).on('submit', '#flower-form', function() {

      startMint()
        
        $(".form-submit").attr("value" ,'generating flower...');
        $(".form-submit").attr("disabled", "disabled");
        $("textarea").attr("disabled", "disabled");

        $(".nft-loading").show();

      return false;
     });
});