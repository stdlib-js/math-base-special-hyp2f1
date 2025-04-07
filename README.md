<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Gaussian hypergeometric function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluates the [Gaussian hypergeometric function][hypergeometric-function].

<section class="intro">

The [Gaussian hypergeometric function][hypergeometric-function] is defined for `|x| < 1` by the power series:

<!-- <equation class="equation" label="eq:hypergeometric_function" align="center" raw="{}_2F_1(a, b; c; x) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!} = 1 + \frac{a b}{c} x + \frac{a(a+1) b(b+1)}{c(c+1)} \frac{x^2}{2!} + \frac{a(a+1)(a+2) b(b+1)(b+2)}{c(c+1)(c+2)} \frac{x^3}{3!} + \cdots" alt="Gaussian hypergeometric function."> -->

```math
{}_2F_1(a, b; c; x) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!} = 1 + \frac{a b}{c} x + \frac{a(a+1) b(b+1)}{c(c+1)} \frac{x^2}{2!} + \frac{a(a+1)(a+2) b(b+1)(b+2)}{c(c+1)(c+2)} \frac{x^3}{3!} + \cdots
```

<!-- <div class="equation" align="center" data-raw-text="{}_2F_1(a, b; c; x) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!} = 1 + \frac{a b}{c} x + \frac{a(a+1) b(b+1)}{c(c+1)} \frac{x^2}{2!} + \frac{a(a+1)(a+2) b(b+1)(b+2)}{c(c+1)(c+2)} \frac{x^3}{3!} + \cdots" data-equation="eq:hypergeometric_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/hyp2f1/docs/img/equation_hypergeometric_function.svg" alt="Gaussian hypergeometric function.">
    <br>
</div> -->

<!-- </equation> -->

and is undefined (or infinite) if `c` equals a non-positive integer.

Here `(q)ₙ` is the (rising) [Pochhammer symbol][pochhammer-symbol], which is defined by:

<!-- <equation class="equation" label="eq:pochhammer_symbol" align="center" raw="(q)_n = \begin{cases} 1 & n = 0 \\ q(q+1) \cdots (q+n-1) & n > 0 \end{cases}" alt="Pochhammer symbol."> -->

```math
(q)_n = \begin{cases} 1 & n = 0 \\ q(q+1) \cdots (q+n-1) & n > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="(q)_n = \begin{cases} 1 & n = 0 \\ q(q+1) \cdots (q+n-1) & n > 0 \end{cases}" data-equation="eq:pochhammer_symbol">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/hyp2f1/docs/img/equation_pochhammer_symbol.svg" alt="Pochhammer symbol.">
    <br>
</div> -->

<!-- </equation> -->

For `|x| >= 1`, the function can be [analytically continued][analytic-continuation] using functional identities and transformation formulas.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import hyp2f1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hyp2f1@esm/index.mjs';
```

#### hyp2f1( a, b, c, x )

Evaluates the [Gaussian hypergeometric function][hypergeometric-function].

```javascript
var v = hyp2f1( 1.0, 1.0, 1.0, 0.0 );
// returns 1.0

v = hyp2f1( 10.0, 7.4, -1.8, -0.99 );
// returns ~0.423

v = hyp2f1( 3.0, 4.0, 7.0, 1.0 );
// returns +Infinity

v = hyp2f1( NaN, 3.0, 2.0, 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import hyp2f1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hyp2f1@esm/index.mjs';

var a = linspace( -50.0, 50.0, 100 );
var b = linspace( -50.0, 50.0, 100 );
var c = linspace( -50.0, 50.0, 100 );
var x = linspace( -50.0, 50.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'a: %d, b: %d, c: %d, x: %d, 2F1(a,b;c;x): %d', a[ i ], b[ i ], c[ i ], x[ i ], hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-hyp2f1.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-hyp2f1

[test-image]: https://github.com/stdlib-js/math-base-special-hyp2f1/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-hyp2f1/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-hyp2f1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-hyp2f1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-hyp2f1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-hyp2f1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-hyp2f1/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-hyp2f1/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-hyp2f1/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-hyp2f1/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-hyp2f1/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-hyp2f1/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-hyp2f1/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-hyp2f1/main/LICENSE

[hypergeometric-function]: https://en.wikipedia.org/wiki/Hypergeometric_function

[pochhammer-symbol]: https://en.wikipedia.org/wiki/Falling_and_rising_factorials

[analytic-continuation]: https://en.wikipedia.org/wiki/Analytic_continuation

</section>

<!-- /.links -->
