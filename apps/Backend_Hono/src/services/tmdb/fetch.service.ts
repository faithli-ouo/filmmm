import { TMDBError } from "@filmmm/types";
import { HTTPException } from 'hono/http-exception'
import { StatusCode } from "hono/utils/http-status";

interface Options {
    method: string;
    headers: {
      accept: string;
      Authorization: string;
    },
  };

async function TMDBErrorHandle(res: Response): Promise<void> {
    if (!res.ok) {
        const errorData = (await res.json()) as TMDBError;
        throw new HTTPException(res.status as StatusCode, {message:`${res.status} ${res.statusText}: ${errorData.status_message}`});
    }
}

async function TMDBFetchHandle<T>(url: string, options: Options): Promise<T>{
    const res = await fetch(url, options);
    await TMDBErrorHandle(res);
    return res.json();
}

export default TMDBFetchHandle;