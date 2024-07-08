function generateLottoNumbers() {
    // 랜덤한 로또 번호 생성 (1부터 45까지 중복되지 않게 6개 선택)
    let numbers = [];
    while (numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // 번호 정렬
    numbers.sort(function(a, b) {
        return a - b;
    });

    // SweetAlert2로 결과를 보여줌
    Swal.fire({
        title: '추첨된 번호',
        html: `<p class="text-2xl font-bold">${numbers.join(', ')}</p>`,
        icon: 'success',
        confirmButtonText: '확인'
    });
}
