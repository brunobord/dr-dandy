var globalData = [];
var meta = {};

// Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$(document).ready(function() {

    function init() {
        for (var key in meta.types) {
            _type = meta.types[key];
            $('#buttons').append('<button type="button" class="btn btn-default btn-filter" id="'+key+'">'+_type.label+'</button> ');
        }

        // UI interactions
        $('.btn-filter').click(function() {
            $(this).toggleClass('active');
            display();
        });

        // Data init
        $.getJSON('./data.json', function(data) {
            globalData = data;
            display();
        });

    }

    function display() {
        var ids = new Array();
        var actives = $('.active').toArray();
        for (var i = 0; i < actives.length; i++) {
            var elt = actives[i];
            ids.push($(elt).attr('id'));
        }

        var filtered = globalData;
        if (ids.length > 0) {
            filtered = globalData.filter(function(elt) {
                return ids.indexOf(elt.type) >= 0;
            });
        }
        shuffle(filtered);

        $('#items').html('');
        for (var i = 0; i < filtered.length; i++) {
            var elt = filtered[i];
            $('#items').append('<p><span class="label label-'+meta.types[elt.type].class+'">'+elt.type+'</span> '+elt.content+'</p>');
        }

    }

    $.getJSON('./meta.json', function(data) {
        meta = data;
        init();
    });

});
