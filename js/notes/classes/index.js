// --- Directions

// EC5 way of doing "classes":
// constructor
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
};


// ES6 is syntactically nice
// 1. class declarations are NOT hoisted
// 2. All code inside class declarations run in strict mode always
// 3. Methods in classes are non-enumerable
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

// Here's a direct equivalent of an ES6 class(!)
let PersonClass2 = (function() {
    "use strict";

    const PersonClass2 = function(name) {
        // make sure the function was called with "new"
        if (typeof new.target === 'undefined') {
            throw new Error("Constructor must be called with new.")
        }
        this.name = name;
    }

    Object.defineProperty(PersonClass2.prototype, "sayName", {
        value: function() {
            // make sure the target WASN'T called with "new"
            if (typeof new.target !== "undefined") {
                throw new Error("Method cannot be called with new.")
            }
            console.log(this.name);
        },
        enumerable: false,  // member functions aren't enumerable
        writable: true,
        configurable: true
    });
    return PersonClass2;
}());

function classesAreFirstClassCitizens() {
    function createObject(classDef) {
        return new classDef();
    }

    let obj = createObject(class {
        sayHi() {
            console.log("hi!");
        }
    })
    obj.sayHi();
}

function classesAreFirstClassCitizensPartTwo() {
    let person = new class {
        constructor(name) {
            this.name = name;
        }
        sayName() {
            console.log(this.name);
        }
    }("Maria");
    person.sayName();
}

const computedMemberField = "html";

class CustomHtmlElement {
    constructor(element) {
        this.element = element;
    }

    get [computedMemberField]() {
        return this.element.innerHTML;
    }
    set html(val) {
        this.element.innerHTML = val;
    }
}
class ClassWithAnIterator {
    constructor() {
        this.letters = ['a', 'b', 'c'];
    }
    *[Symbol.iterator]() {
        yield *this.letters.values();
        // yield *this.letters.entries();
    }
}

function EC5Inheritance() { // ugh
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }

    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };

    function Square(length) {
        Rectangle.call(this, length, length);
    }

    Square.prototype = Object.create(Rectangle.prototype, {
        constructor: {
            value: Square,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    s = new Square(3);
    console.log(s.getArea());
}

function ES6Inheritance() {
    class Rectangle{
        constructor(length, width) {
            this.length = length;
            this.width = width;
        }
        getArea () {
            return this.length * this.width;
        }
    }

    class Square extends Rectangle {
        constructor(length) {
            super(length, length);
        }
    }
    s = new Square(3);
    console.log(s.getArea());
}

function staticMembers() {
    // Any method or accessor can be labled 'static', except for constructor()
    // Static methods do not depend on an instance/a 'this'
    class Rectangle {
        constructor(length, width) {
            //...
        }
        static create(length, width) {
            return new Rectangle(length, width);
        }
    }
}

function mixinsWithExpressionInheritance() {
    const SerializableMixin = {
        serialize() {
            return JSON.stringify(this);
        }
    };
    const AreaMixin = {
        getArea() {
            return this.length * this.width;
        }
    };

    function mixin(...mixins) {
        let base = function() {};
        Object.assign(base.prototype, ...mixins);
        return base;
    }

    class Square extends mixin(AreaMixin, SerializableMixin) {
        constructor(length) {
            super();
            this.length = length;
            this.width = length;   
        }
    }
    const sq = new Square(10);
    console.log(sq.serialize() + " has area " + sq.getArea());
}
function funWithClasses() {
    var person = new PersonType("Eddie");
    person.sayName();
    console.log(person instanceof PersonType);
    console.log(person instanceof Object);

    console.log(typeof PersonClass); // function!

    classesAreFirstClassCitizens();
    classesAreFirstClassCitizensPartTwo();

    console.log('');
    const descriptor = Object.getOwnPropertyDescriptor(CustomHtmlElement.prototype, "html");
    console.log("get" in descriptor);
    console.log("set" in descriptor);

    const collection = new ClassWithAnIterator();
    for(let c of collection) {
        console.log(c);
    }

    EC5Inheritance();
    ES6Inheritance();

    mixinsWithExpressionInheritance();
}

funWithClasses();

module.exports = funWithClasses;