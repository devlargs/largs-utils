export function formatNumber(num: number, digits = 1): string {
    if (typeof num !== 'number' || isNaN(num)) return '0';

    const units = [
        { value: 1e9, symbol: 'b' },
        { value: 1e6, symbol: 'm' },
        { value: 1e3, symbol: 'k' },
        { value: 1, symbol: '' },
    ];

    const isNegative = num < 0;
    const absNum = Math.abs(num);

    const unit = units.find(u => absNum >= u.value) || units[units.length - 1];
    const formatted = (absNum / unit.value).toFixed(digits);

    const clean = formatted.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1');

    return `${isNegative ? '-' : ''}${clean}${unit.symbol}`;
}