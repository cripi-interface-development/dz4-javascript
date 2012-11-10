$(function(){

    var formatInputData ='dd-mm-yyyy';
    var startDate = new Date();
    var startFormatDate =  formatDate (startDate, formatInputData);
    var endDate = new Date();
    var endFormatDate =  formatDate (endDate, formatInputData);
    var nowDate = new Date();
    var nowFormatDate =  formatDate (nowDate, formatInputData);

    $(".date input").mask("99-99-9999")
    $(".date").data('date',nowFormatDate)
        .find("input").val(nowFormatDate);
    $(".date").datepicker({
        format: formatInputData
    }).on('show',function(ev){
//            попытка созадать редоктирование чрез инпут
//            var valDef =$(this).find('input').val()
//            $(this).attr('data-date',valDef)
//            var arr=valDef.split('-')
//            var valNew = new Date(arr[1]+"/"+arr[0]+"/"+arr[2] );
//            ev.date= $(this).attr('data-date');
//            console.log(ev.date);

//            сдвиг в лево
            if ((parseInt($('.datepicker:visible').css('left'))+220)>$('html').width()){
                $('.datepicker:visible').addClass('datepicker-left')
            }else{
                $('.datepicker:visible').removeClass('datepicker-left')
            }

        });

    $('#dp4').data('date',startFormatDate).find("input").val(endFormatDate);
    $('#dp5').data('date',endFormatDate).find("input").val(endFormatDate);

    $('.date input').focusout(function(){

        var dataDOM = $(this).parent()
        var valDef =$(this).val()

        dataDOM.attr('data-date',valDef)
        var arr=valDef.split('-')
        var valNew = new Date(arr[1]+"/"+arr[0]+"/"+arr[2] );

    });
    function formatDate (date, format){
        var separator = format.match(/[.\/-].*?/),
            parts = format.split(/\W+/);
        if (!separator || !parts || parts.length == 0){
            throw new Error("Invalid date format.");
        }
        var formaObj = {separator: separator, parts: parts}
        var val = {
            d: date.getDate(),
            m: date.getMonth() + 1,
            yy: date.getFullYear().toString().substring(2),
            yyyy: date.getFullYear()
        };
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
        var date1 = [];
        for (var i=0, cnt = formaObj.parts.length; i < cnt; i++) {
            date1.push(val[formaObj.parts[i]]);
        }
        return date1.join(formaObj.separator);
    }

    $('#dp4').datepicker({
        format: formatInputData
    })
        .on('changeDate', function(ev){
            if (ev.date.valueOf() > endDate.valueOf()){
                $.jGrowl('Дата начала не может быть больше даты окончания',{
                    theme:  'error'
                });
                startDate=endDate
                return false

            } else {
                startDate = new Date(ev.date);
            }
            $('#dp4').datepicker('hide');
        })
        .on('hide', function(ev){
            ev.date=startDate;
            $(this).data('date',formatDate (startDate, formatInputData)).find("input").val(formatDate (startDate, formatInputData))
        });

    $('#dp5').datepicker()
        .on('changeDate', function(ev){
            if (ev.date.valueOf() < startDate.valueOf()){
                $.jGrowl('Дата окончания не может быть больше даты начала',{
                    theme:  'error'
                });
                endDate=startDate
                return false
            } else {

                endDate = new Date(ev.date);
            }
            $('#dp5').datepicker('hide');
        })
        .on('hide', function(ev){
            ev.date=endDate;
            $(this).data('date',formatDate (endDate, formatInputData)).find("input").val(formatDate (endDate, formatInputData))
        });
});
