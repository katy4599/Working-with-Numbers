import input from 'input';

async function main() {
    const one = await input.text('Please enter a number.');
    const two = await input.text('Please enter another number.');
    const numone = Number(one);
    const numtwo = Number(two);

    console.log(`${numone} + ${numtwo} = ${numone + numtwo}`);
    console.log(`${numone} - ${numtwo} = ${numone - numtwo}`);
    console.log(`${numone} * ${numtwo} = ${numone * numtwo}`);
    console.log(`${numone} / ${numtwo} = ${numone / numtwo}`);
    console.log(`${numone} % ${numtwo} = ${numone % numtwo}`);
    console.log(`${numone} ** ${numtwo} = ${numone ** numtwo}`);
}

main()