var strStr = function (haystack, needle) {
	splitHaystack = haystack.split('');
	splitNeedle = needle.split('');

	if (haystack.includes(needle)) {
		return splitHaystack.indexOf(needle[0]);
	} else if(haystack.includes(needle) === false){
        return -1; 
    } else if(needle === '' || ' '){
        return 0;
    }
};
