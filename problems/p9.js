exports.run = (math) => {
  var triplet = math.pythagoreanTriplet(1000);
	return triplet[0] * triplet[1] * triplet[2];
};