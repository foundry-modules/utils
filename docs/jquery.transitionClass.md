jquery.transitionClass
======================

jQuery functions to invoke classnames that has CSS3 transitions.

**Note: Like jQuery, all the classname functions below support multiple classnames separated by space.**


### addTransitoryClass
Adds a temporary class that will be removed after a specified duration.

```
$(el).addTransitoryClass("no-transition"); // default: 1ms
$(el).addTransitoryClass("animating", 500);
```

### addClassAfter
Adds a class after a specified duration (default: 50ms).

```
$(el).addClassAfter("active"); // default: 50ms
$(el).addClassAfter("active", 500);
```

### removeClassAfter
Removes a class after a specified duration (default: 50ms).

```
$(el).removeClassAfter("active", 500); // default 50ms
$(el).removeClassAfter("active", 500);
```

### addTransitionClass

Adds a temporary helper class before the actual class is added. This helper class is the original class with a `-in` string suffixed.

In the code example below:

* The helper class `expand-in` will be added to the element first.
* 50ms later, the class `expand` will be added to the element.
* 450ms later, `expand-in` class will be removed.

```
$(el).addTransitionClass("expand", 500);
```

### removeTransitionClass
Adds a temporary helper class before the actual class is removed. This helper class is the original class with a `-out` string suffixed.

In the code example below:

* The helper class `expand-out` will be added to the element first.
* 50ms later, the class `expand` will be removed from the element.
* 450ms later, `expand-out` class will be removed.

```
$(el).removeTransitionClass("expand", 500);
```


### License
Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses.

Plugin written by [Jensen Tonne](mailto:jensen.tonne@gmail.com).

