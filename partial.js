Partial = function() {
  var data;
  var element;
  var template;

  var module = {};

  function render() {
    if(data && element && template) {
      var html = Mustache.to_html(template, data);
      element.html(html);
    }
  }

  module.set = function set(jsonData) {
    data = jsonData;

    render();
    return(module);
  };

  module.renderTo = function renderTo(domElement) {
    element = domElement;

    render();
    return(module);
  };

  module.setTemplate = function setTemplate(newTemplate) {
    template = newTemplate;

    render();
    return(module);
  };

  return(module);
};

if (module && module.exports) {
  module.exports = Partial;
}