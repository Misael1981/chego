import { setCourierOnlineUseCase } from "@/services/courier/set-courier-online";

export async function POST(req) {
  try {
    const body = await req.json();
    const { courierId } = body;

    const result = await setCourierOnlineUseCase({ courierId });

    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}
