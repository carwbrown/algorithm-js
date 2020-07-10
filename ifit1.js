// given a weight goal fill the alloted bags
// big bags can not be under filled. ie a big bag can only be full or empty
// params:
// small INTEGER - amount of 1 kilo sized bags
// big INTEGER - amount of 5 kilo sized bags
// goal INTEGER - the amount of kilos to be delivered
// return amount of small bags used or -1 if not enough small bags

function createPackage(small, big, goal) {
  const goalBigBags = Math.floor(goal / 5);
  const howManyBigBags = goalBigBags > big ? big : goalBigBags;
  const remainingKilo = goal - howManyBigBags * 5;

  return remainingKilo > small ? -1 : small - (small - remainingKilo);
}

console.log(createPackage(4, 1, 10));
