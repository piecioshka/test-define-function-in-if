function example1() {
    if (true) {
        function test() { return 1; }
    } else {
        function test() { return 0; }
    }

    var a = test();
    console.log(a);
}

function example2() {
    'use strict';

    if (true) {
        function test() { return 1; }
    } else {
        function test() { return 0; }
    }

    var a = test();
    console.log(a);
}

example1();
example2();
