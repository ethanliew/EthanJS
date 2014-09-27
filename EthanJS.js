
/* Namespace */
var EthanJS = {};

/* Utils  */
EthanJS.Utils = (function () {
    function _hello(who) {
        return "hello, " + who;
    }

    function _print_r(printthis, returnoutput) {
        var output = '';
        if ($.isArray(printthis) || typeof (printthis) == 'object') {
            for (var i in printthis) {
                output += i + ' : ' + _print_r(printthis[i], true) + '\n';
            }
        } else {
            output += printthis;
        } if (returnoutput && returnoutput == true) {
            return output;
        } else {
            alert(output);
        }
    }



    function _autoCloseAlert(selector, delay) {
        var a = $(selector).alert();
        window.setTimeout(function () { a.alert('close') }, delay);
    }

    return {

        hello: function (who) {
            return _hello(who);
        },

        print_r: function (printthis, returnoutput) {
            return _print_r(printthis, returnoutput);
        },

        autoCloseAlert: function (selector, delay) {
            return _autoCloseAlert(selector, delay);
        }
    }

})();




/* Ajax  */
EthanJS.Ajax = (function () {

    function _ajax_post(url, data, done, fail) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: url,
            data: data
        })
        .done(function (msg) {
            done(msg);
        })
        .fail(function (msg) {
            fail(msg);
        });
    }

    function _ajax_post_with_header(url, headers, data, done, fail) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: url,
            header: headers,
            data: data
        })
        .done(function (msg) {
            done(msg);
        })
        .fail(function (msg) {
            fail(msg);
        });
    }


    function _ajax_post_with_custom_header(url, headerName, headerValue, data, done, fail) {
	$.support.cors = true; // ajax cross domain call
        $.ajax({
            type: 'POST',
            cache: false,
            url: url,
            data: data,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(headerName, headerValue);
            }
        }).done(function (msg) {
            done(msg);
        })
        .fail(function (msg) {
            fail(msg);
        });
    }


    return {


        post_ajax: function (url, data, done, fail) {
            return _ajax_post(url, data, done, fail);
        },

        post_ajax_with_header: function (url, headers, data, done, fail) {
            return _ajax_post_with_header(url, headers, data, done, fail);
        },

        postAjaxWithCustomHeader: function (url, headerName, headerValue, data, fnDone, fnFail) {
            return _ajax_post_with_custom_header(url, headerName, headerValue, data, fnDone, fnFail);
        }

    }// end return;

})();

