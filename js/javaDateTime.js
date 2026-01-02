function formatJavaDate(javaDateArray) {
    if (!Array.isArray(javaDateArray) || javaDateArray.length < 6) return 'Invalid Date';
    try {
        const [year, month, day, hour, minute, second, nanos] = javaDateArray;
        const date = new Date(
            year,
            month - 1,
            day,
            hour,
            minute,
            second,
            Math.floor((nanos || 0) / 1000000)
        );
        return date.toLocaleString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    } catch (e) {
        return 'Invalid Date';
    }
}
