import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    } from 'typeorm';
    
    @Entity('products', { schema: 'ventas' })
    export class ProductEntity {
    @PrimaryGeneratedColumn('ventas')
    id: string;
    
    @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    })
    
    createdAt: Date;
    
    @UpdateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    })
    
    updateAt: Date;
    
    @DeleteDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    nullable: true,
    })
    
    deleteAt: Date;
    
    //Relaciones
    @ManyToOne(() => ProductEntity, (category) => category.product)
    category: ProductEntity;
    
    @Column('varchar', {
    name: 'title',
    unique: true,
    comment: 'titulo de producto',
    })
    
    title: string;
    
    @Column('number', {
    name: 'price',
    unique: true,
    comment: 'precio del producto con dos decimales',
    })
    
    price: number;
    
    @Column('varchar', {
    name: 'description',
    unique: true,
    comment: 'descripcion del producto',
    })
    
    description: string;
    
    
    
    @BeforeInsert()
    @BeforeUpdate()
    async setTitle(){
    if(!this.title){
    return;
    }
    this.title = this.title.toUpperCase();
    }
    /*async setEmail(){
    if(!this.email){
    return ('email not found');
    }
    this.email = this.email.toLowerCase().trim();
    
    async hashPassword(){
    if(!this.password){
    return('no eciste el password');
    }
    this.password = await Bcrypt.hash(this.password, 12);
    }
    
*/}