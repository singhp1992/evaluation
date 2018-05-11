import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export default class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: true })
    batchNumber: string

    //@IsDate()
    @Column('text', { nullable: false })
    firstName: string

    //@IsDate()
    @Column('text', { nullable: false })
    lastName: string

    @Column('text', { nullable: true })
    profilePic: string 

    @Column('text', { nullable: true })
    lastEvaluation?: string

}