// Copyright (c) 2016 Owen Shepherd

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
//     subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var D = document,
    W = window;

function setStyles(el, styles) {
    styles.unshift({});
    Object.assign(el.style, styles.reduce(function(acc, curr) {
        return Object.assign(acc, curr);
    }));
}

function appendChildren(el, children) {
    children.forEach(function(child) {
        el.appendChild(child.val);
    });
}

function setClasses(el, classes) {
    classes.forEach(function(classname) {
        el.classList.add(classname);
    });
}

function elify(el) {
    function elified() {
        var scope = this;
        this.val = el;
        this.append = function(children) {
            appendChildren(this.val, children);
            return scope;
        }
        this.onclick = function(todo) {
            scope.val.onclick = todo;
            return scope;
        }
        this.style = function(styles) {
            setStyles(scope.val, styles);
            return scope;
       }
       this.classes = function(classes) {
            setClasses(scope.val, classes);
            return scope;
       }
    }
    return new elified();

}

function get(name) {
    return elify(D.createElement(name));
}

function text(text) {
    return elify(D.createTextNode(text));
}

var elNames = [
    'div',
    'span',
    'em',
    'p',
    'strong',
    'a',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'ol',
    'ul',
    'li',
    'br',
    'i'
]

elNames.forEach(function(elName) {
    window[elName] = function() {
        return get(elName);
    }
});

function mergeStyle(root) {
    function merge(styleOne, styleTwo) {
        return Object.assign({}, styleOne, styleTwo);
    }
    for (var style in root) {
        if (style.depends !== undefined) {

        }
    }
}
