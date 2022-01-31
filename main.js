import input from 'input';

async function main() {
    const oneStr = await input.text('Please enter a number.');
    const twoStr = await input.text('Please enter another number.');
    const option = await input.select("Choose an option", ["max", "min"]);
    const numOne = Number(oneStr);
    const numTwo = Number(twoStr);

    if(option == 'max') {
        console.log(Math.max(numOne, numTwo))
    }
    else {
        console.log(Math.min(numOne, numTwo))
    }
}

main()

