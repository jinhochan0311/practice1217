// 로또 번호 추첨 함수
function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers.sort((a, b) => a - b);
}

// 번호 추첨 버튼 클릭 시 이벤트 핸들러
document.getElementById('generate-btn').addEventListener('click', function() {
    const lottoNumbers = generateLottoNumbers();

    // SweetAlert2를 사용하여 번호를 팝업창에 출력
    Swal.fire({
        title: '추첨된 로또 번호',
        html: `
            <div class="flex flex-wrap justify-center">
                ${lottoNumbers.map(number => `<span class="m-2 p-2 bg-blue-500 text-white rounded-lg">${number}</span>`).join('')}
            </div>
        `,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: '확인',
        customClass: {
            popup: 'bg-white rounded-lg shadow-lg',
            content: 'p-4',
        },
    });
});