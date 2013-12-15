function fib (n){
	fibonachi.out.value = "";
	var arr = new Array(n);
	if (n > 1) {
		arr[0] = 0;
		arr[1] = 1;
		for (i = 2; i < n; i ++) {
			arr[i] = arr[i-1] + arr[i-2];
		}
		for (i = 0; i < n; i ++) {
			fibonachi.out.value += arr[i] + ' ';
		}
	} else {
		if (n == 1) {
			fibonachi.out.value = 0; 
		} else {
			fibonachi.out.value = 'None'; 
		}
 	}
}

function fac (n) {
	factorial.out.value = "";
	if (n > 1) {
		var res = 1;
		for (i = 2; i <= n; i++){
			res = res * i;
		}
		factorial.out.value = res;
	} else {
		factorial.out.value = 1;
	}
}

function sort () { 
	var arr = Array(10);
	for (i = 0; i < 10; i++){
		arr[i] = Math.floor(Math.random() * 100);
	}
	for (i = 0; i < 10; i ++) {
		sorting.out1.value += arr[i] + ' ';
	}
	var t = "";
	for (i = 0; i < 9; i ++) {
		for (j = 0; j < (10-i); j ++) {
			if (arr[j] > arr[j+1]) {
				t = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = t;
			}
		}
	}
	for (i = 0; i < 10; i ++) {
		sorting.out2.value += arr[i] + ' ';
	}
}