const obj={
    name: "kowsika",
    age: 28,
    gender : "Female",
    work: "Analyst",
    place: "Kalpakkam",
    city: "chennai",
    State: "Tamilnadu",
    Country: "India",
    Hobby: "Painting",
}

for(const [key,value] of Object.entries(obj)){
    console.log(`${key}:${value}`)
}