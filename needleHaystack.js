var strStr = function (haystack, needle) {
	splitHaystack = haystack.split('');
	splitNeedle = needle.split('');

	if (haystack.includes(needle)) {
		return splitHaystack.indexOf(needle[0]);
	}
};
