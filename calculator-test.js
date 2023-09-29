
it('should calculate the monthly rate correctly', function () {
  const testValue = {principal: 250000.00, term: 25, rate: 5.99};
  expect(calculateMonthlyPayment(testValue)).toEqual(1609.23);
});


it("should return a result with 2 decimal places", function() {
  const testValue = {principal: 250000.00, term: 25, rate: 5.99};
  expect(
    calculateMonthlyPayment(testValue).toString().split(".")[1].length
  ).toEqual(2);
});
/// etc
