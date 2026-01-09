    const original={
        name:"Arjun",
        age: 20,
        address:{
            city:"amritsar",
            state:"punjab",
        }
    };
    const copy={...original}
    copy.name="sharma"
    copy.address.city="delhi"
    console.log(original.address.city);