// create our data table to be used in our list component using the dummy data below

// user columns

export const userColumns=[
    {field:"id", headerName:"ID", width:70},
    // in user cell we are going to use render cell and shows their image
{field:"user", headerName:"user", width:230, renderCell:(params)=>{
    return(
        <div className="cellWithImg">
        <img src={params.row.img} alt="avatar" className="cellImg" />
        {params.row.username}
        </div>
    )
}},

{field:"email", headerName:"Email", width:230},

{field:"age", headerName:"Age", width:100},

{field:"status", headerName:"Status", width:160, renderCell:(params)=>{
    return (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    )
}},



]



// user rows

export const userRows=[
  {  id:1,
    username:"fonyuy jude",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"passive",
    email:"fonyuy@gmail.com",
    age:23
  },

  {  id:2,
    username:"Lina Christa",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"passive",
    email:"linaChhrista@gmail.com",
    age:21
  },

  {  id:3,
    username:"Antone hariss",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"pending",
    email:"Haris@gmail.com",
    age:23
  },

  {  id:4,
    username:"Vernyuy Collins",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"passive",
    email:"Vernyuy@gmail.com",
    age:18
  },

  {  id:5,
    username:"Bulanyuy tunka",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"active",
    email:"tunka@gmail.com",
    age:18
  },

  {  id:6,
    username:"Pascal White",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"pending",
    email:"white@gmail.com",
    age:22
  },

  {  id:7,
    username:"Luis Paul",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"active",
    email:"luis@gmail.com",
    age:17
  },

  {  id:8,
    username:"Mathiew Paul",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"active",
    email:"paul@gmail.com",
    age:18
  },

  {  id:9,
    username:"Napoleon Romeo",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"passive",
    email:"romeo@gmail.com",
    age:21
  },

  {  id:10,
    username:"Aneta Liza",
    img:"https://www.freecodecamp.org/news/content/images/2022/06/hrishikesh.jpg",
    status:"active",
    email:"Liza@gmail.com",
    age:21
  },

]