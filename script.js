    var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        $(function() { $('.container') });
        $(function() { $('.drag').draggable() });
        $(function() { $('.resize').draggable().resizable({
            aspectRatio: true,
            containment: "#container"
        }); });
        $(function() { $('.fresize').draggable().resizable({
            aspectRatio: false,
            containment: "#container"
        }); });

        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('#btClickMe').click(function() {

            var dynamic_div = $(document.createElement('div')).css({
                border: '1px dashed', position: 'absolute', 
                width: '120', height: '120', padding: '3', margin: '0'
            });

            element_pos = element_pos + $('.container').width() + 20;
            
            // APPEND THE NEWLY CREATED DIV TO "divContainer".
            $(dynamic_div).appendTo('.container').draggable();

            iCnt = iCnt + 1;
        });
    });
