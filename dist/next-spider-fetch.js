/*!
 * name: @feizheng/next-spider-fetch
 * description: Fetch special for spider.
 * homepage: https://github.com/afeiship/next-spider-fetch
 * version: 1.2.0
 * date: 2020-07-02T08:35:11.947Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nodeFetch = require('node-fetch');
  var nxApplyMiddlewares = require('@feizheng/next-apply-fetch-middleware');
  var nxFetchWithNodeTimeut = require('@feizheng/next-fetch-with-node-timeout');
  var nxFetchWithRandomUa = require('@feizheng/next-fetch-with-random-ua');
  var nxFetchWithDelay = require('@feizheng/next-fetch-with-delay');
  var nxFetchWithProxy = require('@feizheng/next-fetch-with-proxy');
  var nxFetchWithDebug = require('@feizheng/next-fetch-with-debug');

  var spiderFetch = nxApplyMiddlewares([
    nxFetchWithNodeTimeut,
    nxFetchWithRandomUa,
    nxFetchWithDelay,
    nxFetchWithProxy,
    nxFetchWithDebug,
  ])(nodeFetch);

  nx.spiderFetch = spiderFetch;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.spiderFetch;
  }
})();

//# sourceMappingURL=next-spider-fetch.js.map
