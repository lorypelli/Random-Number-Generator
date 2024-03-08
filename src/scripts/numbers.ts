const anotherElement = document.querySelector('#another');
const previousElement = document.querySelector('#previous');
const oldNumbers: string[] = [];
if (anotherElement) {
    anotherElement.addEventListener('click', () => {
        const number = document.querySelector('#number');
        const randomNumber: string[] = [];
        if (number) {
            const nums = number.innerHTML.split(' | ');
            for (let i = 0; i < nums.length; i++) {
                if (!oldNumbers.includes(nums[i])) {
                    oldNumbers.push(nums[i]);
                }
            }
            const url = new URLSearchParams(window.location.search);
            const min = url.get('min');
            const max = url.get('max');
            const mode = url.get('mode') || '10';
            const frequency = url.get('frequency') || 'repeat';
            const numbers = url.get('numbers') || '1';
            if (min && max && mode && numbers) {
                for (let i = 0; i < parseInt(numbers); i++) {
                    const number = Math.floor(
                        Math.random() * (parseInt(max) - parseInt(min) + 1) +
                            parseInt(min),
                    )
                        .toString(parseInt(mode))
                        .toUpperCase();
                    if (frequency == 'no-repeat' && !randomNumber.includes(number)) {
                        randomNumber.push(number);
                    } else if (frequency == 'repeat') {
                        randomNumber.push(number);
                    }
                }
            }
            number.innerHTML = randomNumber.join(' | ');
            const duplicate = document.querySelector('#duplicate');
            if (duplicate) {
                duplicate.innerHTML =
                    randomNumber.length < parseInt(numbers)
                        ? 'Some numbers weren\'t generated because they were a duplicate'
                        : '';
            }
            if (previousElement) {
                const previousLabel = document.querySelector('#previousLabel');
                if (previousLabel) {
                    (previousLabel as HTMLElement).style.display = 'block';
                }
                previousElement.innerHTML = oldNumbers.join(', ');
            }
        }
    });
}