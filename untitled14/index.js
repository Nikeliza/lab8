    $("button").click(function(e){
        e.preventDefault();
        var from = 0;
        var to = 0;
        var shag = 0;
        var fun = '';
        from = parseInt($(".from").val());
        to = parseInt($(".to").val());
        shag = parseFloat($(".shag").val());
        fun = $(".fun").val();
        const points = [];

        for (var x = from; x < to; x = x + shag)
        {
            var point = [0,0];
            point[0] = x;
            point[1] = eval(fun);
            points[points.length] = point;
        }
        f = {label: fun, data: points}
        $.plot($(".graf"), [f], {});
    })





