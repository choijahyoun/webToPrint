import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateShippingDto } from './dto/create.shipping.dto';
import { UpdateShippingDto } from './dto/update.shipping.dto';
import { ShippingDestination } from './entities/shipping.entity';

@Injectable()
export class ShippingService {
        constructor( @InjectRepository(ShippingDestination) private shippingDestinationRepository : Repository<ShippingDestination>,
                     @InjectRepository(User) private  userRespository: Repository<User>) {}

    getUserShipping(authuser : User)
    {
        try{
            const user = this.userRespository.findOne(authuser.id);
            if(!user)
            {
                throw new HttpException({
                    status : HttpStatus.UNAUTHORIZED,
                    error : 'UserNotExist',
                    errorDescription : '유저가 존재 하지 않습니다. '
                }, HttpStatus.UNAUTHORIZED);
            }
            const userShipping =  this.shippingDestinationRepository.find({user : authuser});
            return userShipping;

        }catch(error)
        {
            return error;
        }
    }

     async createUserShipping(shippingData : CreateShippingDto, authuser : User)
    {
        try{
            
            const userShipping = await this.shippingDestinationRepository.findOne({user : authuser, basicShippingAddress : true})
            console.log(userShipping);
            if(!userShipping)
            {
                const shipping = new ShippingDestination
                shipping.pickupLoca = shippingData.pickupLoca;
                shipping.recipient = shippingData.recipient;
                shipping.cellNumber = shippingData.cellNumber;
                shipping.phoneNumber = shippingData.phoneNumber;
                shipping.basicShippingAddress = shippingData.basicShippingAddress;
                shipping.zoneCode = shippingData.zoneCode;
                shipping.shippingAddress = shippingData.shippingAddress;
                shipping.shippingAddressEtc= shippingData.shippingAddressEtc;
                shipping.basicShippingAddress = shippingData.basicShippingAddress;
                shipping.user = authuser;
                shipping.basicShippingAddress = true;
                return await this.shippingDestinationRepository.save(shipping);
            }
            else{
                const shipping = new ShippingDestination
                shipping.pickupLoca = shippingData.pickupLoca;
                shipping.recipient = shippingData.recipient;
                shipping.cellNumber = shippingData.cellNumber;
                shipping.phoneNumber = shippingData.phoneNumber;
                shipping.basicShippingAddress = shippingData.basicShippingAddress;
                shipping.zoneCode = shippingData.zoneCode;
                shipping.shippingAddress = shippingData.shippingAddress;
                shipping.shippingAddressEtc= shippingData.shippingAddressEtc;
                shipping.basicShippingAddress = shippingData.basicShippingAddress;
                shipping.user = authuser;
                shipping.basicShippingAddress = false;
                return await this.shippingDestinationRepository.save(shipping);
            }
        }catch(error)
        {
            return error;
        }
    }

   async deleteShipping(shippingId: number, authuser : User)
    {
        const shipping = await this.shippingDestinationRepository.findOne(shippingId);
        console.log(shipping);
        if(!shipping)
        {
            throw new HttpException({
                status : HttpStatus.BAD_REQUEST,
                error : "배송지에러",
                errorDescription : "배송지 없음",
            },HttpStatus.BAD_REQUEST)
        }
        if(authuser.id !== shipping.userId)
        {
            throw new HttpException({
                status : HttpStatus.BAD_REQUEST,
                error : "배송지에러",
                errorDescription : "유저 불일치",
            },HttpStatus.BAD_REQUEST)
        }
        console.log(shippingId)
        try{
            const deleteShipping = await this.shippingDestinationRepository.delete(shippingId);
            console.log(deleteShipping);
            return deleteShipping;
        }catch(error)
        {
            console.log(error);
            return error;
        }
       
    }

    updateBasicShippingAddress(authuser: User , basicShippingId : number)
    {
        try{
            this.shippingDestinationRepository.createQueryBuilder("shipping").update(ShippingDestination).set({
                basicShippingAddress : true
            }).where("shipping.user : :user, basicShippingId : true", {user : authuser}).execute();
            const changeBasic = this.shippingDestinationRepository.createQueryBuilder("shipping").update(ShippingDestination).set({
                                basicShippingAddress : true
                            }).where("shipping.id : :id", {id : basicShippingId})
                            .execute();
            return changeBasic;
        }
        catch(error)
        {
            return error;
        }
    }

    async updateUserShipping(authuser : User, shippingId : number, updateShippingDto : UpdateShippingDto)
    {
        try{ 
            // const shipping = await this.shippingDestinationRepository.findOne(shippingId);
            // if(!shipping)
            // {
            //     throw new HttpException({
            //         status : HttpStatus.BAD_REQUEST,
            //         error : "배송지에러",
            //         errorDescription : "배송지 없음",
            //     },HttpStatus.BAD_REQUEST)
            // }
            // if(authuser.id !== shipping.userId)
            // {
            //     throw new HttpException({
            //         status : HttpStatus.BAD_REQUEST,
            //         error : "배송지에러",
            //         errorDescription : "유저 불일치",
            //     },HttpStatus.BAD_REQUEST)
            // }
            const updateShipping = await this.shippingDestinationRepository.save([
                {
                    id : shippingId,
                    ...updateShippingDto
                }
            ])
            console.log(updateShipping);
            return updateShipping;
        }
        catch(error)
        {
            return error;
        }
    }
}
