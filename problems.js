'use strict';
function p1() {
	var i = 3, sum = 0;
    while(i < 1000) {
		if(i % 3 == 0 || i % 5 == 0) { sum += i; }
		i += 1;
	}
	return sum;
}
function p2() {
	var a = 5, b = 8, sum = 2;
	while(b < 4000000) {
		if(b % 2 == 0) { sum += b; }
		let aa = a;
		a = b;
		b += aa;
	}
	return sum;
}
function p3() {
	return math.max(tools.primeFactors(600851475143));
}
function p4() {
	var result = 10000;
	for(let i=100; i<1000; i++) {
		for(let j=100; j<1000; j++) {
			let p = i*j;
			if(p > result && tools.isPalindrome(p.toString())) {
				result = p;
			}
		}
	}
	return result;
}
function p5() {
	var result = 1;
	for(let i=2; i<21; i++) {
		if(tools.isPrime(i)) {
			let i_pow = 1;
			while(math.pow(i, i_pow) <= 20) {
				i_pow++;
			}
			i_pow--;
			result *= math.pow(i, i_pow);
		}
	}
	return result;
}
function p6() {
	var nb1 = 0, nb2 = 0;
	for (let i=1; i<101; i++) {
		nb1 += i * i;
		nb2 += i;
	}
	return nb2 * nb2 - nb1;
}
function p7() {
	var primes = tools.getPrimes(10001);
	return primes[10000];
}
function p8() {
	var s = '73167176531330624919225119674426574742355349194934' +
			'96983520312774506326239578318016984801869478851843' +
			'85861560789112949495459501737958331952853208805511' +
			'12540698747158523863050715693290963295227443043557' +
			'66896648950445244523161731856403098711121722383113' +
			'62229893423380308135336276614282806444486645238749' +
			'30358907296290491560440772390713810515859307960866' +
			'70172427121883998797908792274921901699720888093776' +
			'65727333001053367881220235421809751254540594752243' +
            '52584907711670556013604839586446706324415722155397' +
            '53697817977846174064955149290862569321978468622482' +
            '83972241375657056057490261407972968652414535100474' +
            '82166370484403199890008895243450658541227588666881' +
            '16427171479924442928230863465674813919123162824586' +
            '17866458359124566529476545682848912883142607690042' +
            '24219022671055626321111109370544217506941658960408' +
            '07198403850962455444362981230987879927244284909188' +
            '84580156166097919133875499200524063689912560717606' +
            '05886116467109405077541002256983155200055935729725' +
            '71636269561882670428252483600823257530420752963450';
	for (let i = 0; i < s.length - 12; i++) {
		var fact = 1;
		for (let j = 0; j < 13; j++) {
			fact *= parseInt(s.substring(i + j, i + j + 1));
		}
		var result = math.max(result, fact);
	}
	return result;
}
function p9() {
	var triplet = tools.pythagoreanTriplet(1000);
	return triplet[0] * triplet[1] * triplet[2];
}
function p10() {
	return tools.getPrimesSum(2000000);
}
