'use strict';
var tools = {
	primeFactors: function(n) {
		var factors = [], p = 2;
		while(n > 1) {
			if(n % p == 0) {
				factors.push(p);
				n /= p;
			}
			p += 1;
		}
		return factors;
	},
	isPrime: function(n) {
		if(n <= 1 || (n > 2 && n % 2 == 0)) { return false; }
		var i = 3;
		while (i * i <= n) {
			if (n % i == 0) { return false; }
			i += 2;
		}
		return true;
	},
	getPrimes: function(limit) {
		var arr = [2, 3];
     	var counter = 4;
	    while(arr.length < limit) {
	        if(counter % 2 != 0 && counter % 3 != 0) {
	            var temp = 4;
	            while(temp * temp <= counter) {
	                if(counter % temp == 0) { break; }
	                temp ++;
	            }
	            if(temp * temp > counter) {
	                arr.push(counter);
	            }
	        }
	        counter++;
	    }
		return arr;
	},
	getPrimesSum: function(limit) {
		var sum = 5; // 2 + 3
     	var counter = 4; // next prime
	    while(counter < limit) {
	        if(counter % 2 != 0 && counter % 3 != 0) {
	            var temp = 4;
	            while(temp * temp <= counter) {
	                if(counter % temp == 0) { break; }
	                temp ++;
	            }
	            if(temp * temp > counter) { sum += counter; }
	        }
	        counter++;
	    }
		return sum;
	},
	isPalindrome: function(s) {
		var len = s.length;
		if(len <= 1) { return true; }
		if(s[0] != s[len - 1]) { return false; }
		return tools.isPalindrome(s.substring(1, len - 1));
	},
	pythagoreanTriplet: function(limit) {
		// Returns the pythagorean triplet (a, b, c) where a + b + c = limit
		var a = 1, b = 2, c = 0;
		while(true) {
			c = limit - a - b;
			if(c < 3) { return []; }
			if(a * a + b * b == c * c) { break; }
			if(a + 1 < b) {
				a += 1;
			} else {
				a = 1;
	            b += 1;
			}
		}
		return [a, b, c];
	}
};