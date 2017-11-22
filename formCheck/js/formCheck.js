(function ($) {
    $.fn.extend({
        checkForm: function () {
            var _root = $(this);

            // 验证是否为空，支持INPUT、TEXTAREA、SELECT
            _root.find(".need_value").each(function () { // 失去焦点验证
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    // input TEXTAREA
                    if ((this.tagName == 'INPUT' || this.tagName == 'TEXTAREA') && thisValue.length == 0) {
                        tipDiv.html(thisTip);
                    }
                    // select
                    if (this.tagName == 'SELECT' && thisValue == "-1") {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkValue() { // 提交验证
                var success = true;
                _root.find(".need_value").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    // input TEXTAREA
                    if ((this.tagName == 'INPUT' || this.tagName == 'TEXTAREA') && thisValue.length == 0) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                    // select
                    if (this.tagName == 'SELECT' && thisValue == "-1") {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证手机
            _root.find(".check_phone").each(function () { // 失去焦点验证
                var reg = /^1(3|4|5|7|8|9)\d{9}$/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkPhone() { // 提交验证
                var success = true;
                var reg = /^1(3|4|5|7|8|9)\d{9}$/;
                _root.find(".check_phone").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证手机、座机
            _root.find(".check_phone2").each(function () { // 失去焦点验证
                var reg = /^((0\d{2,3}-\d{7,8})|(1[345789]\d{9}))$/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkPhone2() { // 提交验证
                var success = true;
                var reg = /^((0\d{2,3}-\d{7,8})|(1[345789]\d{9}))$/;
                _root.find(".check_phone2").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证密码
            _root.find(".check_password").each(function () { // 失去焦点验证
                var reg = /^(\w){6,20}$/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkPassword() { // 提交验证
                var success = true;
                var reg = /^(\w){6,20}$/;
                _root.find(".check_password").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证正整数
            _root.find(".check_number_zheng").each(function () { // 失去焦点验证
                var reg = /(^[1-9]\d*$)/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkNumberZheng() { // 提交验证
                var success = true;
                var reg = /(^[1-9]\d*$)/;
                _root.find(".check_number_zheng").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证正整数或0
            _root.find(".check_number_zheng2").each(function () { // 失去焦点验证
                var reg = /^([1-9]\d*|[0]{1,1})$/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkNumberZheng2() { // 提交验证
                var success = true;
                var reg = /^([1-9]\d*|[0]{1,1})$/;
                _root.find(".check_number_zheng2").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证>1,最多两位小数
            _root.find(".check_number_zheng3").each(function () { // 失去焦点验证
                var reg = /^\d+(\.\d{0,2})?$/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue) | thisValue < 1) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkNumberZheng3() { // 提交验证
                var success = true;
                var reg = /^\d+(\.\d{0,2})?$/;
                _root.find(".check_number_zheng3").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue) | thisValue < 1) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证和为100
            function checkNumber100() {
                var success = true;
                arr = []; // 存放概率
                var sum = 0; // 存放概率和
                // 将概率存放入数组
                $(".check_number_sum100").each(function () {
                    var num = $(this).val();
                    arr.push(num);
                })
                // 概率相加
                for (var i = 0; i < arr.length; i++) {
                    sum += parseInt(arr[i]);
                }
                if (!(sum == 100)) {
                    $(".check_number_sum100").each(function () {
                        var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                        tipDiv.html('');
                        var thisValue = $(this).val();
                        var thisTip = $(this).attr('data-tip');
                        tipDiv.html(thisTip);
                        success = false;
                    })
                }
                return success;
            }

            // 验证邮箱
            _root.find(".check_email").each(function () { // 失去焦点验证
                var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                $(this).blur(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                    }
                })
            })

            function checkEmail() { // 提交验证
                var success = true;
                var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                _root.find(".check_email").each(function () {
                    var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
                    tipDiv.html('');
                    var thisValue = $(this).val();
                    var thisTip = $(this).attr('data-tip');
                    if (!reg.test(thisValue)) {
                        tipDiv.html(thisTip);
                        success = false;
                    }
                })
                return success;
            }

            // 验证两次密码是否相同
            // _root.find(".check_email").each(function () { // 失去焦点验证
            //     var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            //     $(this).blur(function () {
            //         var tipDiv = $(this).parents('.form_li').find('.li_tip_p');
            //         tipDiv.html('');
            //         var thisValue = $(this).val();
            //         var thisTip = $(this).attr('data-tip');
            //         if (!reg.test(thisValue)) {
            //             tipDiv.html(thisTip);
            //         }
            //     })
            // })
            //
            // function checkPasswordSame() {
            //     var success = true;
            //     var firstPassword = $('.check_password_same').eq(0).val();
            //     var secondPassword = $('.check_password_same').eq(1).val();
            //     if (firstPassword == secondPassword) {
            //         success = false;
            //     }
            //     return success;
            // }

            // 提交时验证全部
            _root.find('button[type="submit"]').click(function () {

                // 如有验证未通过显示红字提示
                checkValue();
                checkPhone();
                checkPhone2();
                checkPassword();
                checkNumberZheng();
                checkNumberZheng2();
                checkNumberZheng3();
                checkNumber100();
                checkEmail();
                // checkPasswordSame();

                // 验证未通过提示
                if (!(checkValue() && checkPhone() && checkPhone2() && checkPassword() && checkNumberZheng() && checkNumberZheng2() && checkNumberZheng3() && checkNumber100() && checkEmail())) {
                    alert('请完善信息后再提交');
                    return false;
                }
                return false;
            })
            return this;
        }
    });
})(jQuery);