module.exports = function toReadable(number) {
    let digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentys = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number == 0) return 'zero';
    let st = '';
    let c = Math.floor(number / 100);
    if (c > 0) {
        st += digits[c - 1] + ' hundred ';
        number -= c * 100;
    }
    if (number > 19) {
        c = Math.floor(number / 10);
        st += twentys[c - 2];
        c = number % 10;
        if (c > 0) {
            st += ' ' + digits[c - 1];
        }
    } else if (number > 9) {
        st += tens[number - 10];
    } else if (number > 0) {
        st += digits[number - 1];
    }

    return st.trim();
}