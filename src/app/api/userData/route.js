import connectDB from '@/utility/mongodb';
import UserData from '@/models/UserData';

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { date, data } = body;

        if (!date || !data) {
            return new Response(JSON.stringify({ message: 'Date and data are required' }), { status: 400 });
        }

        const userData = await UserData.findOneAndUpdate({ date }, { ...data }, { new: true, upsert: true });

        return new Response(JSON.stringify(userData), { status: 200 });
    } catch (error) {
        console.log(" >>> Error handling POST request")
        console.log(error)
        return new Response(JSON.stringify({ message: 'Error handling POST request', error: error }), { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectDB();
    
        const { searchParams } = new URL(req.url);
        const date = searchParams.get('date');
    
        if (!date) {
            return new Response(JSON.stringify({ message: 'Date argument is required' }), { status: 400 });
        }

        const dataCheck = await UserData.exists({ date });

        if (!dataCheck) {
            try {
                const createData = await UserData.create({ date });
                return new Response(JSON.stringify(createData), { status: 200 });
            } catch (error) {
                console.log(" >>> Error creating missing data")
                console.log(error)
                return new Response(JSON.stringify({ message: 'Error creating missing data', error: error }), { status: 500 });
            }
        }

        const userData = await UserData.findOne({ date });

        return new Response(JSON.stringify(userData), { status: 200 });
    } catch (error) {
        console.log(" >>> sending error")
        console.log(error)
        return new Response(JSON.stringify({ message: 'Error retrieving data', error: error }), { status: 500 });
    }
}