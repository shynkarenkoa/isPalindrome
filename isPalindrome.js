function isPalindrome(string)
{
	var res = false		
	palindrome(string.replace(/ /g,""))

	function palindrome(str)
	{
		if (str.charAt(0) != str.charAt(str.length-1) || str.length == 1)
			res = false
			else 	if (str.length >= 2) 
					{
						res = true; 
						palindrome(str.slice(1, -1));
					}	
	}
	return res
}
