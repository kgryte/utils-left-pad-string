Left Pad
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Left pad a string.


## Installation

``` bash
$ npm install utils-left-pad-string
```


## Usage

``` javascript
var lpad = require( 'utils-left-pad-string' );
```

#### lpad( str, len[, pad] )

Left pads a `string` such that the padded `string` has a `length` of __at least__ `len`.


``` javascript
var str = lpad( 'a', 5 );
// returns '     a'
```

By default, an input `string` is padded with `spaces`. To pad with a different character or sequence of characters, provide a `pad` string.

``` javascript
var str = lpad( 'beep', 10, 'b' );
// returns 'bbbbbbbeep'

str = lpad( 'boop', 12, 'beep' );
// returns 'beepbeepboop'
```


## Notes

* An output `string` is __not__ guaranteed to have a length of __exactly__ `len`, but __only__ to have a `length` of __at least__ `len`. To generate a padded `string` having a `length` equal to `len`

	``` javascript
	var str = lpad( 'boop', 10, 'beep' );
	// returns 'beepbeepboop' => length 12

	str = str.substring( str.length-10 );
	// returns 'epbeepboop' => length 10
	``` 


## Examples

``` javascript
var round = require( 'math-round' );
var lpad = require( 'utils-left-pad-string' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
	n = round( Math.random()*10 ) + str.length;
	console.log( lpad( str, n, 'b' ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g utils-left-pad-string
```


### Usage

``` bash
Usage: lpad [options] str --len length

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          Minimum string length.
         --pad str             String used to pad. Default: ' '.
```


### Examples

``` bash
$ lpad beep --len 10 --pad b
# => bbbbbbbeep
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-left-pad-string.svg
[npm-url]: https://npmjs.org/package/utils-left-pad-string

[build-image]: http://img.shields.io/travis/kgryte/utils-left-pad-string/master.svg
[build-url]: https://travis-ci.org/kgryte/utils-left-pad-string

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/utils-left-pad-string/master.svg
[coverage-url]: https://codecov.io/github/kgryte/utils-left-pad-string?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-left-pad-string.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-left-pad-string

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-left-pad-string.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-left-pad-string

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-left-pad-string.svg
[github-issues-url]: https://github.com/kgryte/utils-left-pad-string/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
