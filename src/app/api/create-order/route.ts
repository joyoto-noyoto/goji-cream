import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();
    console.log("hit api", data);
    const response = await axios.post(
      "https://www.wellgrow.live/api/lead/create-order",
      data
    );

    // // Simplify the response to avoid circular structure
    const simplifiedResponse = {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };

    return NextResponse.json(simplifiedResponse);
    // return NextResponse.json("simplifiedResponse");
  } catch (error) {
    console.error("API error: ", error);
    return new NextResponse("An error occurred", { status: 500 });
  }
}
