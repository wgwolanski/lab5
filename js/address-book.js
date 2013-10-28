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
    $(".sort-ui .btn").removeClass("active");
    render(Employees.entries);
    $(".sort-ui .btn").click(function() {
        var sortBtn = $(this);
        sortObjArray(Employees.entries, sortBtn.attr('data-sortby'));
        render(Employees.entries);
        sortBtn.addClass("active");
        sortBtn.siblings().removeClass("active");
    });


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
    var template = $('.template');
    var container = $('.address-book');
    var curr;
    container.hide();
    container.empty();

    $.each(entries, function(){
        curr = template.clone();
        for (prop in this) {
            curr.find('.' + prop);
            if (prop =='pic') {
                curr.find('.pic').attr({
                    src: this.pic,
                    alt: 'Picture of ' + this.first
                });
            } else {
                curr.find('.' + prop).html(this[prop]);
            }
        }

        curr.removeClass('template');
        container.append(curr);
        container.fadeIn(1000);
    });
}

