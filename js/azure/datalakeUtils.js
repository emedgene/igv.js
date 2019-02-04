var igv = (function (igv) {
    igv.Azure = {
        proxyDomainName: '',

        isAzureURL: function (url) {
            return url.includes("azure");
        },

        addQueryParams: function (url, startChunk, endChunk) {
            if (url.includes('azure')) {
                var symbol = (url.includes('?')) ? '&' : '?';
                url = url + symbol + 'startChunk=' + startChunk + '&endChunk=' + endChunk;
            }

            return url;
        }
    }

    return igv;

})(igv || {});
