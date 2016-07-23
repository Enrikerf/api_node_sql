/**
 * Created by Enrikerf on 15/02/2016.
 * Comandos:
 * mocha --recursive: hace los test de toda la carpeta test
 * mocha test/dir : hace los test de dir
 * mocha -u tdd: para que lo haga con inteface tdd y use los suite y describes
 */

/*
var assert = require('assert');

describe('PROVES TEST',function(){
    it('ES IGUAL',function(){
        assert.strictEqual('1','1');
    })
    it('ERROR: NO IGUAL',function(){
        assert.strictEqual('2','1');
    })
})

*/




/*
Usage: mocha [debug] [options] [files]

Commands:

    init <path>
    initialize a client-side mocha setup at <path>

Options:

-h, --help                              output usage information
-V, --version                           output the version number
-A, --async-only                        force all tests to take a callback (async) or return a promise
-c, --colors                            force enabling of colors
-C, --no-colors                         force disabling of colors
-G, --growl                             enable growl notification support
-O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
-R, --reporter <name>                   specify the reporter to use
-S, --sort                              sort test files
-b, --bail                              bail after first test failure
-d, --debug                             enable node's debugger, synonym for node --debug
-g, --grep <pattern>                    only run tests matching <pattern>
-f, --fgrep <string>                    only run tests containing <string>
-gc, --expose-gc                        expose gc extension
-i, --invert                            inverts --grep and --fgrep matches
-r, --require <name>                    require the given module
-s, --slow <ms>                         "slow" test threshold in milliseconds [75]
-t, --timeout <ms>                      set test-case timeout in milliseconds [2000]
-u, --ui <name>                         specify user-interface (bdd|tdd|exports)
-w, --watch                             watch files for changes
    --check-leaks                           check for global variable leaks
--compilers <ext>:<module>,...          use the given module(s) to compile files
--debug-brk                             enable node's debugger breaking on the first line
--delay                                 wait for async suite definition
--es_staging                            enable all staged features
--full-trace                            display the full stack trace
--globals <names>                       allow the given comma-delimited global [names]
--harmony                               enable all harmony features (except typeof)
--harmony-collections                   enable harmony collections (sets, maps, and weak maps)
--harmony-generators                    enable harmony generators
--harmony-proxies                       enable harmony proxies
--harmony_arrow_functions               enable "harmony arrow functions" (iojs)
--harmony_classes                       enable "harmony classes" (iojs)
--harmony_proxies                       enable "harmony proxies" (iojs)
--harmony_shipping                      enable all shipped harmony features (iojs)
--inline-diffs                          display actual/expected differences inline within each string
--interfaces                            display available interfaces
--no-deprecation                        silence deprecation warnings
--no-exit                               require a clean shutdown of the event loop: mocha will not call process.exit
--no-timeouts                           disables timeouts, given implicitly with --debug
    --opts <path>                           specify opts path
--prof                                  log statistical profiling information
--recursive                             include sub directories
--reporters                             display available reporters
--retries                               set number of times to retry failed test cases
--throw-deprecation                     throw an exception anytime a deprecated function is used
--trace                                 trace function calls
--trace-deprecation                     show stack traces on deprecations
--watch-extensions <ext>,...            additional extensions to monitor with --watch
*/