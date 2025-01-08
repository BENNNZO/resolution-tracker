import connectDB from '@/utility/mongodb';

// export async function POST(req) {
//   try {
//     console.log(" >>> connecting to db")
//     await connectDB();
    
//     console.log(" >>> getting email and password")
//     const { data } = await req.json();
    
//     console.log(">>> creating log");
//     await Log.create({ data: data });
    
//     console.log(" >>> sending response")
//     return new Response(JSON.stringify({ message: 'log created successfully' }), { status: 201 });
//   } catch (error) {
//     console.log(" >>> sending error")
//     console.log(error)
//     return new Response(JSON.stringify({ message: 'Error creating log', error: error }), { status: 500 });
//   }
// }

export async function GET(req) {
    console.log(" >>> connecting to db")
    await connectDB();

    console.log(" >>> GET HAS BEEN CALLED!")

    return new Response(JSON.stringify({ message: 'GET request successful' }), { status: 200 });
}