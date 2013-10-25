/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/


/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/

$(function(){

    render(employees.entries);

}); // document ready

function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()

function render(entries) {
    var template = $(".template");
    var addresses = $(".address-book");
    addresses.empty();
    $.each(entries, function() {
        template.clone();
        for (prop in this) {
            if (prop === 'pic') {
                find('.pic').attr({
                    src: this[prop],
                    alt: this[prop]
                });
            } else {
                find('.' + prop).html(this.prop);
            }

        }
        // current.find('.first').html(this.first);
        // current.find('.last').html(this.last);
        // current.find('.title').html(this.title);
        // current.find('.dept').html(this.dept);
        // current.find('.pic').attr({
        //     src: this.pic,
        //     alt: 'Picture of ' + this.first
        // });
        this.removeClass("template");
        addresses.append(this);
    });


}

// function render(entries) {
//     var temp = $(".template");
//     var addresses = $(".address-book");
//     var entry;
//     var prop;
//     addresses.empty();
//     for (entry in entries) {
//         current = entry.clone();
//         current.find('.first').html(this.first);
//         current.find('.last').html(this.last);
//         current.find('.title').html(this.title);
//         current.find('.dept').html(this.dept);
//         current.find('.pic').attr({
//             src: this.pic,
//             alt: 'Picture of ' + this.first
//         });
//         current.removeClass("template");
//         addresses.append(current);
//     }


// }