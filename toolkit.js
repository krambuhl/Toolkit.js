/*
    
    @name:    Toolkit.js
    @author:  Evan Krambuhl (stumptownbear.com)
    @version: 0.1.0
    @date:    February 2013

*/


(function(doc, win) {
    var root = this;
    
    var toolkit = function() {        
        if (!(this instanceof toolkit)) return new toolkit();
    }
    
    toolkit.VERSION = '0.1.0';
   
    this.toolkit = toolkit;
    
    
    /*
        Function: create(type, [attributes])
    
        Arguments:
            @type: element type string ('div', 'li', 'a')  
    */
    toolkit.create = function(type, attributes) { 
        this._element = doc.createElement(type);        
        return (attributes !== undefined) ? this.attr(attributes) : this;
    }
    
        
    /*
        Function: get()
        Returns: this._element
    */
    toolkit.get = function() {
        return this._element; 
    }
    
        
    /*
        Function: attr (attributes)
    
        Arguments:
            @attributes: obj -- ex { id: "enter-button", class: "btn is-active", title: "Submit" }
    */
    toolkit.attr = function(attributes) {
        for (var key in attributes) this._element.setAttribute(key, attributes[key]); 
        return this;
    }
    
    
    
    var listClasses = function(element) {
        return element.className.split(/\s+/g).splice(1);
    }
    
    
    /*
        Function: addClass(class, class, ...)
        Arguments: 
            @class: class string (args...)
    */
    toolkit.addClass = function() {
        var flag,
            args = Array.prototype.slice.call(arguments),
            iterator = (typeof args[0] == "object") ? args : args[0], // rubber ducky
            currentClasses = listClasses(this._element);
            
        
            
        for (var i = 0; i < args.length + 1; i++) {
            flag = false;
            
            for (var j = 0; j < currentClasses.length; j++) {
                if (currentClasses[j] == args[i]) {
                    flag = true;
                    break;
                }
            }
            
            if (!flag) currentClasses.push(args[i]);
        }
        
        this._element.className = currentClasses.join(' ');
               
        return this;
    }
    
    
    
})(document, window)