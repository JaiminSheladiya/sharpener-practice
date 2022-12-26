// console.log('Person1 : show ticket');
// console.log('Person2 : show ticket');

// const promiseWifeBringingTicks = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('ticket')
//     },3000)
// })

// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('wife : I have the ticks')
//     console.log('husband : we should go in ')
//     console.log('wife : no i am hungry')
//     // console.log(`Person3 : show ${t}`)
// return new Promise((res,rej)=>res(`${t} popcorn`))
// })


// const getButter  = getPopcorn.then((t)=>{
//     console.log('wife : I got some popcorn')
//     console.log('husband : we should go in ')
//     console.log('wife : I need butter on my popcorn')
// return new Promise((res,rej)=>res(`${t} butter`))
// })

// getButter.then(t=>console.log(t))

// console.log('Person4 : show ticket');
// console.log('Person5 : show ticket');


console.log('Person1 : show ticket');
console.log('Person2 : show ticket');

const preMovie = async ()=>{
    const promiseWifeBringingTicks = new Promise((res,rej)=>{
            setTimeout(()=>{
                res('ticket')
            },3000)
        })

        const getPopcorn = promiseWifeBringingTicks.then((t)=>{
        return new Promise((res,rej)=>res(`popcorn`))
        })

        const getButter  = getPopcorn.then((t)=>{
            return new Promise((res,rej)=>res(`butter`))
            })

            const getColdDrinks  = getPopcorn.then((t)=>{
                return new Promise((res,rej)=>res(`cold drinks`))
                })
            

        let ticket = await promiseWifeBringingTicks


        console.log(`wife: i have the ${ticket}`);
        console.log('husband : we should go in ')
        console.log('wife : no i am hungry')

        let popcorn = await getPopcorn

            console.log(`husband : i got some ${popcorn}`);
            console.log(`husband : we should go in`);
            console.log(`wife : I need butter on my popcorn`);

        let butter = await getButter

        console.log(`husband : i got some ${butter} on popcorn`)
        console.log('wife : I need some cold-drink')
        let cd = await getColdDrinks
        console.log(`husband : here is your ${cd}`)

        return ticket

}

preMovie().then((m)=>console.log(`person 3 : show ${m}`))



console.log('Person4 : show ticket');
console.log('Person5 : show ticket');
