(function($, window){

    $(function(){

        var $menu = $('[class^="wf-menu"]');

        $menu.each(function(index, element){
            var $el = $(element),
                $menu_ul = $('ul', $el),
                $colapser = $('.mobile_collapser', $el);

            $colapser.on('click', function(){
                $menu_ul.toggleClass('collapsed');
            });
        });

    });

})(jQuery, window);