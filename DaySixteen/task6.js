// Task 6: Use closure to build a simple module for managing a collection (add, remove, list items).

const itemModule = (function () {
    let items = [];

    return {
        add: function (item) {
            items.push(item);
        },
        remove: function (item) {
            items = items.filter(i => i !== item);
        },
        list: function () {
            console.log(items);
        }
    };
})();

itemModule.add("Apple");
itemModule.add("Banana");
itemModule.remove("Apple");
itemModule.list(); // Output: [ 'Banana' ]
