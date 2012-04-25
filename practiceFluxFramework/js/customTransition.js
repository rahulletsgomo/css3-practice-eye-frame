flux.transitions.custom = function(fluxslider, opts) {
    return new flux.transition(fluxslider, $.extend({
        requires3d: true,
        barWidth: 60,
        setup: function() {

        },
        execute: function() {

        }
    }, opts));
}