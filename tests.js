Mustache = require('./mustache.js');
Partial = require('./partial.js');

// Testy

part = Partial();

element = {
  html: function(html) { console.log(html); }
};

part.
    set({name: "Marcin"}).
    setTemplate('<span>{{name}}</span>').
    renderTo(element);

part.set({name: "Robert"});