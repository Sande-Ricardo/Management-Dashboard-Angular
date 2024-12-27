import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtService } from "../core/services/jwt.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private jwtSv:JwtService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token desde LocalStorage
    const token = this.jwtSv.jwt;

    if (token) {
        console.log("jwtInterceptor");
        
        // Clonar la solicitud y agregar el encabezado Authorization
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        // return next.handle(req)
    }

    return next.handle(req);
    }
}