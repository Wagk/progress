var automatic_bar = {
    list: [],
    update_this: function(bar){
        this.list.push(bar)
    },
    update: function(bar_updater){
        this.list.forEach(bar_updater)
        console.log("updated")
    }
}

function increment_bar(bar){
    bar.value += 1
    if(bar.value >= bar.max) {
        bar.value = bar.max
        // bar.remove()
    }
}

function progress(collection_id) {
    var bar_list = document.getElementById(collection_id).children;
    for (let i = 0; i < bar_list.length; ++i){
        increment_bar(bar_list[i])
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
    automatic_bar.update_this(new_bar);
}

function interval_update() {
    automatic_bar.update(increment_bar);
}
