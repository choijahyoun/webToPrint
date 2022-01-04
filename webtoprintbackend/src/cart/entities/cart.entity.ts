import { CoreEntity } from "src/common/entities/core.entity";
import { FileUrl } from "src/file/entities/file.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, RelationId } from "typeorm";

@Entity()
export class Cart extends CoreEntity{
    
    @Column()
    titleName : string;
    
    @Column()
    productName :string;

    //상품 사이즈 
    @Column()
    size : string;

    //재단사이즈
    @Column()
    cutting_size: string;

    //제본종류
    @Column()
    kindBinding : string;

    //링
    @Column({nullable: true})
    ring : string;

    //앞뒤면비닐
    @Column({nullable:true})
    vinyl : string;

    //제본방향
    @Column()
    bindDirection : string;

    //표지  양단면
    @Column()
    coverPrex : string;

    //표지 색깔
    @Column()
    coverColor : string;

    // 표지 용지 
    @Column()
    coverPaper : string;

    //후가공
    @Column()
    postProcessEfoxy : boolean;
    @Column({nullable:true})
    postProcessKindCoating : string;
    @Column({nullable:true})
    postProcessKindLeaf : string;

    //본문 양단면
    @Column()
    mainPrex : string;
    //본문 색깔
    @Column()
    mainColor : string;
    //본문 용지 
    @Column()
    mainPaper : string;
    
    @Column()
    mainPaperNum : number;

    @Column({nullable:true})
    flyLeaf : string;

    // 제작부수 
    @Column()
    makeNum : number;

    //급한 인쇄 
    @Column({nullable:true})
    quickPrint : boolean;

    @Column({default: false})
    isFileUpload : boolean;

    @ManyToOne(
        ()=> User , 
        user=> user.cart,
        { onDelete : 'CASCADE'})
    user: User;

    @RelationId((cart : Cart) => cart.user)
    userId : number;

}