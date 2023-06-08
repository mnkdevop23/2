$(document).ready(function () {
    $.validator.addMethod("email", function (value, element, param) {
        if (this.optional(element)) {//This is not a 'required' element and the input is empty
            return true;
        }

        if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
            return true;
        }

        return false;

    }, "Некорректный email");

    $.validator.addMethod("customphone", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 11 && phone_number.length < 14 &&
            phone_number.match(/^\+[0-9]{8,16}$/);
    }, "Некорректный телефон");

    $.validator.addMethod("nowhitespace", function (value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    }, "Некорректный телефон");

    $.validator.addMethod("checkRealNumber", function (value, element) {
        console.log('value', value);
        return /^\+?([87](?!95[5-7]|99[08]|907|94[^09]|336)([348]\d|9[0-6789]|7[01247])\d{8}|[1246]\d{9,13}|68\d{7}|5[1-46-9]\d{8,12}|55[1-9]\d{9}|55[138]\d{10}|55[1256][14679]9\d{8}|554399\d{7}|500[56]\d{4}|5016\d{6}|5068\d{7}|502[345]\d{7}|5037\d{7}|50[4567]\d{8}|50855\d{4}|509[34]\d{7}|376\d{6}|855\d{8,9}|856\d{10}|85[0-4789]\d{8,10}|8[68]\d{10,11}|8[14]\d{10}|82\d{9,10}|852\d{8}|90\d{10}|96(0[79]|17[0189]|181|13)\d{6}|96[23]\d{9}|964\d{10}|96(5[569]|89)\d{7}|96(65|77)\d{8}|92[023]\d{9}|91[1879]\d{9}|9[34]7\d{8}|959\d{7,9}|989\d{9}|971\d{8,9}|97[02-9]\d{7,11}|99[^4568]\d{7,11}|994\d{9}|9955\d{8}|996[2579]\d{8}|9989\d{8}|380[345679]\d{8}|381\d{9}|38[57]\d{8,9}|375[234]\d{8}|372\d{7,8}|37[0-4]\d{8}|37[6-9]\d{7,11}|30[69]\d{9}|34[679]\d{8}|3459\d{11}|3[12359]\d{8,12}|36\d{9}|38[169]\d{8}|382\d{8,9}|46719\d{10})$/.test(value)
    }, "Некорректный телефон");

    $('#phone, #phoneConfirm, #footer_phone').on('keyup', function () {
        var value = $(this).val();
        $(this).val('+' + value.substr(value.lastIndexOf('+') + 1));
    });

    $("#phone, #phoneConfirm, #footer_phone").keydown(function (event) {
        // Разрешаем: backspace, delete, tab и escape
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        } else {
            // Убеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });

    $(".form").validate({

        rules: {
            name: {
                required: {
                    depends: function () {
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                minlength: 2
            },
            phone: {
                required: true,
                checkRealNumber: true,
                customphone: true,
                nowhitespace: true
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: "Введите мин. 2 символа",
            phone: "Некорректный телефон",
            email: "Некорректный email"
        }
    });

    $(".footer__form").validate({

        rules: {
            name: {
                required: {
                    depends: function () {
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                minlength: 2
            },
            phone: {
                required: true,
                checkRealNumber: true,
                customphone: true,
                nowhitespace: true
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: "Введите мин. 2 символа",
            phone: "Некорректный телефон",
            email: "Некорректный email"
        }
    });

    var affiliateusertoken;
    var affiliateid;
    var ip;
    var countryCode;
    var dialCode;
    var countryId;
    var region;
    var city;
    var utmmedium;
    var utmcontent;
    var utmcampaign;
    var utmsource;
    var utmterm;

    var email;
    var phoneNumber;
    var phoneOperator;
    var params;

    var res;

    var fullName;
    var _fullName;
    var firstName;
    var lastName;
    var phoneConfirm;
    var phoneSms;
    var footer_iti;
    var iti;
    var iti2;

    init();

    function yaCounter() {
        ym(90931255,'reachGoal','lead')
        return true;
    }

    function vkTarget() {
        //VK.Goal('conversion')
        return true;
    }

    $('.popup-form-btn').click(function () {

        // debugger;

        fullName = $('#name').val();
        _fullName = fullName.split(' ');
        firstName = _fullName[0];
        lastName = _fullName[1] || _fullName[0];
        email = $('#email').val();
        console.log('email', email);
        console.log('fullName', fullName);

        var _phoneNumber = $('#phone').val();
        phoneOperator = _phoneNumber[0] + _phoneNumber[1];
        phoneNumber = _phoneNumber.replace(phoneOperator, '');

        phoneSms = _phoneNumber.replace("+", "");
        console.log('phoneSms', phoneSms);

        params = {
            fullName: fullName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneSms,
            countryCode: countryCode,
            dialCode: dialCode,
            countryId: countryId,
            region: region,
            city: city,
            sub_id: sub_id,
            utm_source: utmsource,
            utm_medium: utmmedium,
            utm_campaign: utmcampaign,
            utm_term: utmterm,
            utm_content: utmcontent
        };

        if ($(".form ").valid()) {

            // res = randomInteger(1000, 9999);
            // console.log(res);

            $('#currPhone').text(phoneSms);

            if ($(".popup-ver").fadeIn("slow")) {

                $(".form-popup").fadeOut("slow");

                $.ajax({
                    url: 'php/send.php',
                    async: false,
                    type: 'POST',
                    data: jQuery.param({
                        field0: phoneSms,
                        // field1: res
                    }),
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    success: function (response) {
                        res = response;
                        console.log('send sms ok', response);
                    },
                    error: function (response) {
                        console.log("error send sms", response);
                    }
                });

                // dataLayer.push({'event': 'formsend'});
                //yaCounter();
            }

            $.ajax({
                url: 'php/temps.php',
                async: false,
                type: 'POST',
                data: jQuery.param({
                    firstName: firstName,
                    lastName: lastName,
                    field3: email,
                    field4: phoneSms,
                    countryCode: countryCode,
                    field6: ip,
                    field7: decodeURI(utmmedium),
                    field8: decodeURI(utmcontent),
                    field9: decodeURI(utmcampaign),
                    field10: decodeURI(utmsource),
                    field11: decodeURI(utmterm),
                    region: region,
                    city: city,
                }),
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function () {
                    console.log('temps ok');
                },
                error: function () {
                    console.log("error");
                }
            });
        }
    });

    $('.footer-form-btn').click(function () {

        fullName = $('#footer_name').val();
        _fullName = fullName.split(' ');
        firstName = _fullName[0];
        lastName = _fullName[1] || _fullName[0];
        email = $('#footer_email').val();
        console.log('email', email);
        console.log('fullName', fullName);

        var _phoneNumber = $('#footer_phone').val();
        phoneOperator = _phoneNumber[0] + _phoneNumber[1];
        phoneNumber = _phoneNumber.replace(phoneOperator, '');

        phoneSms = _phoneNumber.replace("+", "");
        console.log('phoneSms', phoneSms);

        params = {
            fullName: fullName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneSms,
            countryCode: countryCode,
            dialCode: dialCode,
            countryId: countryId,
            region: region,
            city: city,
            sub_id: sub_id,
            utm_source: utmsource,
            utm_medium: utmmedium,
            utm_campaign: utmcampaign,
            utm_term: utmterm,
            utm_content: utmcontent
        };

        if ($(".footer__form").valid()) {

            //res = randomInteger(1000, 9999);
            //console.log(res);

            $('#currPhone').text(phoneSms);

            if ($(".popup-ver").fadeIn("slow")) {

                $.ajax({
                    url: 'php/send.php',
                    async: false,
                    type: 'POST',
                    data: jQuery.param({
                        field0: phoneSms,
                        //field1: res
                    }),
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    success: function (response) {
                        console.log('send sms ok', response);
                    },
                    error: function (response) {
                        console.log("error send sms", response);
                    }
                });

                // dataLayer.push({'event': 'formsend'});
                //yaCounter();
            }

            $.ajax({
                url: 'php/temps.php',
                async: false,
                type: 'POST',
                data: jQuery.param({
                    firstName: firstName,
                    lastName: lastName,
                    field3: email,
                    field4: phoneSms,
                    countryCode: countryCode,
                    field6: ip,
                    field7: decodeURI(utmmedium),
                    field8: decodeURI(utmcontent),
                    field9: decodeURI(utmcampaign),
                    field10: decodeURI(utmsource),
                    field11: decodeURI(utmterm),
                    region: region,
                    city: city,
                }),
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    console.log('temps ok');
                },
                error: function () {
                    console.log("error");
                }
            });
        }
    });

    $("#res").click(function () {
        var codeSms = $('#sms-code').val();
        if (codeSms == res) {
            console.log('ok');

            $('.popup-ver').fadeOut("slow");
            $('.preloader').show();

            // $.ajax({
            //     url: 'php/temps.php',
            //     type: 'POST',
            //     data: jQuery.param({
            //         firstName: firstName,
            //         lastName: lastName,
            //         field3: email,
            //         field4: phoneSms,
            //         countryCode: countryCode,
            //         field6: 'смс',
            //         field7: ip,
            //         field8: decodeURI(utmmedium),
            //         field9: decodeURI(utmcontent),
            //         field10: decodeURI(utmcampaign),
            //         field11: decodeURI(utmsource),
            //         field12: decodeURI(utmterm),
            //         region: region,
            //         city: city,
            //     }),
            //     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            //     success: function () {
            //         console.log('temps ok');
            //     },
            //     error: function () {
            //         console.log("error");
            //     }
            // });

            $.ajax({
                url: 'php/lead.php',
                type: 'POST',
                data: params,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    console.log('lead', response);
                    yaCounter()
                    vkTarget()
                    $('.preloader').hide();
                    window.location = 'success.php';
                },
                error: function (response) {
                    console.log("error lead", response);
                    $('.preloader').hide();
                    window.location = 'success.php';
                }
            });
        } else {
            console.log('fail');
            $('#codeError').css('display', 'block');
        }
    });

    $("#change-number").click(function () {
        $('.popup-form-title, #sms-code, #codeError, #res, #change-number').css('display', 'none');
        $('.phoneConfirmWrap').css('display', 'block');
    });

    $(".popup-form").validate({

        rules: {
            phoneConfirm: {
                required: true,
                // minlength: 8,
                customphone: true,
                nowhitespace: true
            },
        },
        messages: {
            phoneConfirm: "Некорректный телефон"
        }
    });

    $("#submit-number").click(function () {

        phoneConfirm = $('.phoneConfirm').val();

        var _phoneNumber = phoneConfirm;
        if (_phoneNumber) {
            phoneOperator = _phoneNumber[0] + _phoneNumber[1];
            phoneNumber = _phoneNumber.replace(phoneOperator, '');
        }

        phoneSms = _phoneNumber.replace("+", "");
        console.log('phoneSms', phoneSms);

        params = {
            fullName: fullName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneSms,
            countryCode: countryCode,
            dialCode: dialCode,
            countryId: countryId,
            region: region,
            city: city,
            sub_id: sub_id,
            utm_source: utmsource,
            utm_medium: utmmedium,
            utm_campaign: utmcampaign,
            utm_term: utmterm,
            utm_content: utmcontent
        };

        if ($(".popup-form").valid()) {

            // res = randomInteger(1000, 9999);
            // console.log(res);

            $.ajax({
                url: 'php/send.php',
                async: false,
                type: 'POST',
                data: jQuery.param({
                    field0: phoneSms,
                    // field1: res
                }),
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    res = response
                    console.log('send sms ok', response);
                },
                error: function (response) {
                    console.log("error send sms", response);
                }
            });

            $.ajax({
                url: 'php/temps.php',
                async: false,
                type: 'POST',
                data: jQuery.param({
                    firstName: firstName,
                    lastName: lastName,
                    field3: email,
                    field4: phoneSms,
                    countryCode: countryCode,
                    field6: ip,
                    field7: decodeURI(utmmedium),
                    field8: decodeURI(utmcontent),
                    field9: decodeURI(utmcampaign),
                    field10: decodeURI(utmsource),
                    field11: decodeURI(utmterm),
                    region: region,
                    city: city,
                }),
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function () {
                    console.log('temps ok');
                },
                error: function () {
                    console.log("error");
                }
            });

            $('#currPhone').text(phoneSms);
            $('.popup-form-title, #sms-code, #res, #change-number').css('display', 'block');
            $('.phoneConfirmWrap').css('display', 'none');
        }
    });

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    function getCountryId(countryCode) {
        $.ajax({
            type: 'POST',
            url: 'php/countryCode.php',
            data: {
                countryCode: countryCode
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (response) {
                countryId = response;
                console.log('getCountryId: ' + countryId);
            },
            error: function (response) {
                console.log('error getCountryId: ' + response);
            }
        });
    }

    function init() {

        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                .exec(window.location.href);

            if (results) {
                return results[1] || 0;
            }
        };

        affiliateusertoken = $.urlParam('usertoken');
        affiliateid = $.urlParam('affiliateId');
        utmmedium = $.urlParam('utm_medium');
        utmcontent = $.urlParam('utm_content');
        utmterm = $.urlParam('utm_term');
        utmcampaign = $.urlParam('utm_campaign');
        utmsource = $.urlParam('utm_source');
        sub_id = $.urlParam('subid');

        // console.log(utmsource);
        // console.log(utmmedium);
        // console.log(utmcampaign);
        // console.log(utmcontent);
        // console.log(utmterm);

        var input = document.querySelector("#phone");
        var input2 = document.querySelector("#phoneConfirm");
        var footer_input = document.querySelector("#footer_phone");

        iti = intlTelInput(input, {
            utilsScript: 'js/lib/utils.js',
            defaultCountry: 'auto',
            separateDialCode: false,
            autoHideDialCode: false,
            nationalMode: false,
            initialCountry: 'auto',
            geoIpLookup: function (callback) {
                $.ajax({
                    method: "POST",
                    url: "php/intlTelInput.php"
                })
                    .done(function (resp) {

                        var response = JSON.parse(resp);

                        countryCode = response.countryCode;
                        region = response.region;
                        city = response.city;
                        ip = response.ip;

                        console.log('countryCode:', countryCode);
                        console.log('region:', region);
                        console.log('city:', city);
                        console.log('ip:', ip);

                        countryCode = (response && response.countryCode) ? response.countryCode : "";

                        callback(countryCode);

                        input.addEventListener("countrychange", function () {
                            var countryData = iti.getSelectedCountryData();

                            countryCode = countryData.iso2.toUpperCase();
                            console.log('countrychange:', countryCode);

                            dialCode = countryData.dialCode;
                            console.log('dialCode:', dialCode);

                            iti2.setCountry(countryCode);
                            footer_iti.setCountry(countryCode);
                            //getCountryId(countryCode);
                        });

                        iti2 = intlTelInput(input2, {
                            defaultCountry: 'auto',
                            separateDialCode: false,
                            autoHideDialCode: false,
                            nationalMode: false,
                            initialCountry: 'auto',
                            geoIpLookup: function (callback) {
                                callback(countryCode);
                            }
                        });

                        iti2.setCountry(countryCode);
                        input2.addEventListener("countrychange", function () {
                            var countryData2 = iti2.getSelectedCountryData();

                            countryCode = countryData2.iso2.toUpperCase();
                            console.log('countrychange:', countryCode);

                            dialCode = countryData2.dialCode;
                            console.log('dialCode:', dialCode);

                            iti.setCountry(countryCode);
                            footer_iti.setCountry(countryCode);
                            getCountryId(countryCode);
                        });

                        footer_iti = intlTelInput(footer_input, {
                            defaultCountry: 'auto',
                            separateDialCode: false,
                            autoHideDialCode: false,
                            nationalMode: false,
                            initialCountry: 'auto',
                            geoIpLookup: function (callback) {
                                callback(countryCode);
                            }
                        });

                        footer_iti.setCountry(countryCode);
                        footer_input.addEventListener("countrychange", function () {
                            var countryData3 = footer_iti.getSelectedCountryData();

                            countryCode = countryData3.iso2.toUpperCase();
                            console.log('countrychange:', countryCode);

                            dialCode = countryData3.dialCode;
                            console.log('dialCode:', dialCode);

                            iti.setCountry(countryCode);
                            iti2.setCountry(countryCode);
                            getCountryId(countryCode);
                        });
                    });
            },
        });
    }
});
