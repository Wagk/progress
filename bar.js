'use strict';

/*
 The bar is the basic block of the application
 It handles
 */
class Bar {
    constructor(max, stride, initial = 0){
        this.max    = max;
        this.value  = initial;
        this.stride = stride;
    }

    update(more = 0) {
        this.value += this.stride;
        this.value += more;
        if (this.value >= this.max) {
            // TODO: Call the end-of-load functions
            this.value = this.max;
        }
    }
}

class BarGroup {

    add_bar(bars) {
        if (bars instanceof Array) {
            this.bars.concat(bars);
        }
        else {
            this.bars.append(bars);
        }
    }

    constructor(bars){
        this.add_bar(bars);
    }

    update(more = 0) {
        this.bars.forEach(function(bar){
            bar.update(more);
        });
    }
}

/*
 the tick_controller is basically the main event loop for the html, it controls
 bar_groups
 */
var tick_controller = (function(){
    var tick_rate = 1;
    var all_bars = [];
    return {
        tick: tick_rate,
        update: function(){
            all_bars.forEach((bar_group) => bar_group.update());
        },
        get: function(){

        }
    };
}());

function increment_bar(bar){
    bar.value += 0.001;
    if(bar.value >= bar.max) {
        bar.value = bar.max;
        // bar.remove()
    }
}

function progress(collection_id) {
    var bar_list = document.getElementById(collection_id).children;
    for (let i = 0; i < bar_list.length; ++i){
        increment_bar(bar_list[i]);
    }
}

function add_bar(collection_id) {
    var new_bar = document.createElement("progress");
    var bar_list = document.getElementById(collection_id);

    new_bar.max = 10;
    new_bar.value = 0;

    bar_list.appendChild(new_bar);
}

function add_automatic_bar(collection_id) {
    var new_bar = document.createElement("progress");
    var bar_list = document.getElementById(collection_id);

    new_bar.max = 10;
    new_bar.value = 0;

    bar_list.appendChild(new_bar);
    bar_group.update_this(new_bar);
}

window.setInterval(tick_controller.update, tick_controller.tick);
