import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create.cart.dto';
import { UpdateCartDto } from './dto/update.cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
    constructor(@InjectRepository(Cart) private cartRepository : Repository<Cart>){}

    getCart(authuser : User)
    {
        try{
            const cartList=this.cartRepository.find({user:authuser});
            return cartList;
        }
        catch(error){
            return error;
        }
    }

    createCart(cartData : CreateCartDto, authuser : User)
    {
        try{
            const cart = new Cart
            cart.titleName = cartData.titleName;
            cart.productName = cartData.productName;
            cart.size = cartData.size;
            cart.cutting_size = cartData.cutting_size;
            cart.kindBinding = cartData.kindBinding;
            cart.ring= cartData.ring;
            cart.vinyl = cartData.vinyl;
            cart.bindDirection = cartData.bindDirection;
            cart.coverPrex = cartData.coverPrex;
            cart.coverColor = cartData.coverColor;
            cart.coverPaper = cartData.coverPaper;
            cart.postProcessEfoxy = cartData.postProcessEfoxy;
            cart.postProcessKindCoating = cartData.postProcessKindCoating;
            cart.postProcessKindLeaf = cartData.postProcessKindLeaf;
            cart.mainPrex = cartData.mainPrex;
            cart.mainPaper= cartData.mainPaper;
            cart.mainColor = cartData.mainColor;
            cart.mainPaperNum = cartData.mainPaperNum;
            cart.flyLeaf = cartData.flyLeaf;
            cart.makeNum = cartData.makeNum;
            cart.quickPrint = cartData.quickPrint;
            cart.user = authuser;
            return this.cartRepository.save(cart);
        }
        catch(error){
            return error;
        }
    }

   async updateCart(updateData : UpdateCartDto, authuser : User, cartId : number)
    {
        try{
           const userCart =  await this.cartRepository.findOne(cartId,{loadRelationIds: true});
           if(!userCart)
           {
               throw new HttpException({
                   status : HttpStatus.BAD_REQUEST,
                   error : 'cartError',
                   errorMessage : '장바구니 데이터 없음',
               },HttpStatus.BAD_REQUEST)
           }
           if(authuser.id !== userCart.userId)
           {
                throw new HttpException({
                        status : HttpStatus.FORBIDDEN,
                        error : " you can't edit a order that you don't owner"
                    }, HttpStatus.FORBIDDEN);
            }
            const updateCart = await this.cartRepository.save([
                {
                    id : cartId,
                    ...updateData
                }
            ])
            return updateCart;
        }
        catch(error){
            return error;
        }
    }

    deleteCart(cartId : number)
    {
        try{
            return this.cartRepository.delete({id : cartId});
        }
        catch(error){
            throw error;
        }
    }
}
