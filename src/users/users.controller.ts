import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController{
    constructor(private readonly userService:UsersService){}

    @Get()
    getUsers(){
        return 'Hello';
    }

    @Post()
    insertUser(
        @Body('name') name:string,
        @Body('age') age:number,
        @Body('surname') surname:string,
        @Body('email') email:string,
    ){
        const userId= this.userService.insertUser(name,age,surname,email);
        return{
            id:userId,
        }
    }

    @Get()
    getAllUsers(){
        return this.userService
    }

    @Get(':userId')
    getUser(@Param('userId') userId:string){
        return this.userService.getUser(userId,name,age,surname,email);
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userId:string){
        this
    }
}