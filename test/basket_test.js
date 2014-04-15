var basket = require('../lib/basket');

exports['test_add'] = function (test) {
	basket.clear();
	basket.add("loaf of bread", 5);
    test.equal(basket.count(), 1);
    test.done();
};

exports['test_totalPrice'] = function (test) {
	basket.clear();
	basket.add("loaf of bread", 5);
    test.equal(basket.totalPrice(), 5);
    test.done();
};

exports['test_printList_one_item'] = function (test){
	basket.clear();
	basket.add("cuca", 30);
	test.equal(basket.printList(), "1x cuca 30\n");
    test.done();
}

exports['test_printList_two_items'] = function (test){
	basket.clear();
	basket.add("cuca", 30);
	basket.add("marmite", 800);
	test.equal(basket.printList(), "1x cuca 30\n1x marmite 800");
    test.done();
}

exports['test_printList_one_item'] = function (test){
	basket.clear();
	basket.add("cuca", 30);
	basket.add("cuca", 30);
	test.equal(basket.printList(), "2x cuca 30");
    test.done();
}
