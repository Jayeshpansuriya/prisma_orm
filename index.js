import { PrismaClient } from './generated/prisma/index.js'; // 👈 full path to index.js is needed in ESM

const prisma = new PrismaClient();

const main = async () => {
//   const newUsers = await prisma.user.createMany({
//   data: [
//   { namej: "vinode", email: "vinode123@test.com" },
//   { namej: "james", email: "james123@gmial.om" },
//   { namej: "bhadva", email: "bhadva123@sala.gmail.com" }
// ],

//   });

//   console.log("Inserted Users:", newUsers);



//? get all users

// const users = await prisma.user.findMany();
// console.log(users);

//? get singal id
// const user = await prisma.user.findUnique({
//     where: { id: 2},
// })
// console.log(user); 


//? get users with filtering 
// const user = await prisma.user.findUnique({
//     where: {namej: "vinode"},
// });
// console.log(user )


// const updatedUser = await prisma.user.update({
//   where : {id:5  },
//     data: { namej: "BobTheBuilder"},
// }) ;

// console.log(updatedUser);


//? update multipal users

// const updatedUser = await prisma.user.updateMany({
//   where : {id:5  },
//     data: { namej: "JD"},
// }) ;

// console.log(updatedUser);

//?deleate one user 

const deleteduser =  await prisma.user.delete({
    where:{id:5},
});
console.log(deleteduser);


};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
