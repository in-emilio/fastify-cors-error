import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class RequestContextMiddleware implements NestMiddleware<Request, Response> {
    async use(req: any, res: any, next: () => void): Promise<void> {
        // throw new UnauthorizedException();
        res.statusCode = 202;
        res.end('A')
        // next();
    }
}
