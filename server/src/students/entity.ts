import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'


@Entity()
export default class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    batchNumber: number
    //should this be a foreign key? 

    //@IsDate()
    @Column('text', { nullable: false })
    firstName: string

    //@IsDate()
    @Column('text', { nullable: false })
    lastName: string

    @Column('text', { nullable: false })
    profilePic: string 

    @Column('text', { nullable: true })
    lastEvaluation?: string
}