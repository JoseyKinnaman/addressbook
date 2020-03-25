$(document).ready(function() {
  // functions for index.html
  // $(".clickable").click(function() {
  //   $(this)
  //     .children("h4#name")
  //     .slideToggle();
  // });

  $("#contactForm").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateZipInput = $("input#cityStateZip").val();
    // radio button for #addressType
    var addressType = $("input:radio[name=addressType]:checked").val();
    console.log(addressType);
    var phoneNumberInput = $("input#phoneNumber").val();
    console.log(phoneNumberInput);
    // select box for #phoneType
    var phoneType = $("#phoneType").val();
    console.log(phoneType);

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".cityStateZip").text(cityStateZipInput);
    // radio button for #addressType
    $(".addressType").text(addressType);
    $(".phoneNumber").text(phoneNumberInput);
    // select box for #phoneType
    $(".phoneType").text(phoneType);

    event.preventDefault();
  });
});
