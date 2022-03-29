function extractCurrencyValue(string, rate) {
    return +string.slice(1, string.length) * rate
}