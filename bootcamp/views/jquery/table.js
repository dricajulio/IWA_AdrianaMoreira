function draw_table(){

    $("#result").empty();
    $.getJSONuncached = function(url){
        return $.ajax({
            url : url,
            type: 'GET'
            cache: false,
            success: function(html){
                    $("#results").append(html);
            }
        }

        )
        $.getJSONuncached("/get/html")
    }
}

$(documet).ready(function(){
    draw.table():
}