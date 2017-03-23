var fn = function(arg1, arg2) {
    var str = '<p>aap ' + this.noot + ' ' + arg1 + ' ' + arg2 + '</p>';
    console.log(str);
};
var context = {
    'noot': 'noot'
};
var args = ['mies', 'wim'];

fn.call(context, 1, 1);

fn.apply(context ,args);

var store = fn.bind(context , 1, 2);

store();