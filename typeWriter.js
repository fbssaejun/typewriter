//Prints phrase like a type writer, each letter at a time
const typeWriter = (phrase) => {
  const letters = phrase.split('');
  letters.forEach((letter, index) => {
    setTimeout(() => {
       process.stdout.write(letter)
       if(index === letters.length - 1) process.stdout.write('\n');
    }, 200 * index)
  })
}

typeWriter("Hello there from lighthouse labs")


//Another solution: 

// const typeWriter = (phrase) => {
// const words = phrase.split(' ');
// for(let i = 0; i < words.length; i++) {
  
//     setTimeout(() => {
//       for(let k = 0; k < words[i].length; k++) {
//         setTimeout(() => {
//           process.stdout.write(`${words[i][k]}`)
//           if(i === words.length - 1 && k === words[i].length - 1) {
//             process.stdout.write('\n');
//             // console.log('This is working')
//           }
//         }, 200 * k)
//       }
//       if(i !== 0) process.stdout.write(' ');
//     }, 2000 * i)
//  }
// }

// typeWriter("This is my phrase")
