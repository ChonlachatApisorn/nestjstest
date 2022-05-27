import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          // secret: jwtConstants.secret,
          secretOrKey: jwtConstants.secret,
        });
      }
    
      async validate(payload: any) {
        return { userID: payload.sub, username: payload.username };
      }
}
